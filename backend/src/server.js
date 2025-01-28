const express = require("express");
const dotenv = require("dotenv");
const { getFilesData, getFilesOriginData } = require("./controllers/filesController");
const cors = require('cors'); 

// Cargar variables de entorno desde .env
dotenv.config();

const app = express();
app.use(cors({
  origin: 'http://localhost:3001' // Dominio del frontend
}));
const PORT = process.env.PORT || 3000;

// Rutas principales
app.get("/files/data", getFilesData);
app.get('/files/list', getFilesOriginData);

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});