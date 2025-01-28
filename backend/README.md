# Backend - Test Toolbox

Este es el backend del proyecto Test Toolbox. Está construido con Node.js y Express, y se encarga de consumir un API externa, procesar archivos CSV y exponer los datos formateados a través de endpoints REST.

## Requisitos previos

- Node.js 14 o superior.
- Docker (opcional, para ejecutar en contenedor).

## Configuración

1. **Instalar dependencias:**
   \`\`\`bash
   npm install
   \`\`\`

2. **Configurar variables de entorno:**
   Crea un archivo \`.env\` en la raíz del backend con las siguientes variables:
   \`\`\`env
   API_KEY=aSuperSecretKey
   PORT=3000
   \`\`\`

## Ejecución

### Localmente

- Iniciar el servidor:
  \`\`\`bash
  npm start
  \`\`\`
- Ejecutar pruebas:
  \`\`\`bash
  npm test
  \`\`\`

### Con Docker

- Construir la imagen:
  \`\`\`bash
  docker build -t backend .
  \`\`\`
- Ejecutar el contenedor:
  \`\`\`bash
  docker run -p 3000:3000 backend
  \`\`\`

## Endpoints

- **GET /files/list**: Obtiene la lista de archivos disponibles.
- **GET /files/data**: Obtiene los datos de los archivos procesados.
- **GET /files/data?fileName=\<nombre\>**: Filtra los datos por nombre de archivo.

## Tecnologías utilizadas

- Node.js
- Express
- Axios
- Mocha (pruebas)
- Chai (assertions)

## Contribución

Si deseas contribuir, sigue las instrucciones en el README principal del proyecto.
