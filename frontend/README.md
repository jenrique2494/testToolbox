# Frontend - Test Toolbox

Este es el frontend del proyecto Test Toolbox. Está construido con React y Bootstrap, y consume los datos proporcionados por el backend para mostrarlos en una interfaz de usuario.

## Requisitos previos

- Node.js 16 o superior.
- Docker (opcional, para ejecutar en contenedor).

## Configuración

1. **Instalar dependencias:**

   ```bash
   npm install
   ```

2. **Configurar variables de entorno:**
   Crea un archivo \`.env\` en la raíz del frontend con las siguientes variables:

   ```env
   REACT_APP_API_URL=<http:/>/localhost:3000>
   ```

## Ejecución

### Localmente

- Iniciar la aplicación:

  ```bash
  npm start
  ```

- Ejecutar pruebas:

  ```bash
  npm test
  ```

### Con Docker

- Construir la imagen:

  ```bash
  docker build -t frontend .
  ```

- Ejecutar el contenedor:

  ```bash
  docker run -p 3001:3000 frontend
  ```

## Características

- **Filtrado por nombre de archivo**: Usa un dropdown para filtrar los datos por archivo.
- **Tabla dinámica**: Muestra los datos procesados en una tabla responsive.

## Tecnologías utilizadas

- React
- React Bootstrap
- Axios
- Jest (pruebas)
- Testing Library (pruebas)

## Contribución

Si deseas contribuir, sigue las instrucciones en el README principal del proyecto.
