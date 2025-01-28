const { Transform } = require("stream");

function csvParser(delimiter = ",") {
    let headers = [];
    let isFirstLine = true;

    return new Transform({
        readableObjectMode: true,
        transform(chunk, encoding, callback) {
            const lines = chunk.toString().split("\n");

            lines.forEach((line) => {
                const columns = line.split(delimiter);
                // Procesar la primera línea como encabezados
                if (isFirstLine) {
                    headers = columns.map((header) => header.trim());
                    isFirstLine = false;
                    return;
                }
                // Crear un objeto con los encabezados como claves
                if (columns.length === headers.length) {
                    const row = headers.reduce((acc, header, index) => {
                        acc[header] = columns[index].trim();
                        return acc;
                    }, {});
                    this.push(row); // Emitir el objeto
                }
            });
            callback();
        },
    });
}

module.exports = csvParser;
