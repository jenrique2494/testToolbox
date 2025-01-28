const axios = require("axios");
const csvParser = require("../utils/csvParser");

const API_SERVICE_URL = process.env.API_SERVICE_URL || "https://echo-serv.tbxnet.com/v1/secret";
const API_KEY = process.env.API_KEY || 'Bearer aSuperSecretKey';



async function fetchFromAPI(endpoint) {
    try {
        const response = await axios.get(`${API_SERVICE_URL}${endpoint}`, {
            headers: { Authorization: API_KEY },
        });
        return response.data;
    } catch (error) {
        console.error(`Error al solicitar ${endpoint}:`, error.message);
        throw error;
    }
}

// Procesar archivo CSV
async function processCSV(fileName) {
    try {
        const url = `/file/${fileName}`;
        const response = await axios.get(`${API_SERVICE_URL}${url}`, {
            headers: { Authorization: API_KEY },
            responseType: "stream",
        });
        const lines = [];
        return new Promise((resolve, reject) => {
            response.data
                .pipe(csvParser())
                .on("data", (row) => {
                    if (row.file && row.text && row.number && row.hex && row.hex.length === 32) {
                        lines.push({
                            text: row.text,
                            number: parseInt(row.number,0),
                            hex: row.hex
                        });
                    }
                })
                .on("end", () => resolve({ file: fileName, lines }))
                .on("error", (error) => reject(error));
        });
    } catch (error) {
        console.error(`Error al procesar ${fileName}:`, error.message);
        return { file: fileName, lines: [] };
    }
}

// Servicio principal: obtener y procesar todos los archivos
async function fetchAndProcessFiles() {

    try {
        // Obtener lista de archivos
        const { files } = await fetchFromAPI("/files");
        const results = await Promise.allSettled(
            files.map((file) => processCSV(file))
        );
        const processedFiles = results
            .filter((result) => result.status === "fulfilled")
            .map((result) => result.value);
        return processedFiles;
    } catch (error) {
        console.error("Error al obtener y procesar archivos:", error.message);
        throw error;
    }
}

module.exports = { fetchAndProcessFiles };