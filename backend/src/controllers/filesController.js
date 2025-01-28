const { fetchAndProcessFiles } = require("../services/fileService");

async function getFilesData(req, res) {
  try {
    // Obtener y procesar los archivos desde el servicio
    const allFilesData = await fetchAndProcessFiles();
    // Filtrar por fileName si existe
    const fileName = req.query.fileName;
    let filesToProcess = [...allFilesData];
    
    if (fileName) {
      filesToProcess = filesToProcess.filter(({file}) => file === fileName);
      console.log('filesToProcess',filesToProcess)
    }
    res.json(filesToProcess);
  } catch (error) {
    console.error("Error en getFilesData:", error.message);
    res.status(500).json({ error: "Error interno del servidor" });
  }
}

async function getFilesOriginData(req, res) {
  try {
    const response = await fetchAndProcessFiles();
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener la lista de archivos' });
  }
}

module.exports = { getFilesData,getFilesOriginData };