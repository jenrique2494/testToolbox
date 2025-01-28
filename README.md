# Test Toolbox Full Stack Project

Este proyecto es una aplicación Full Stack que consta de un backend en Node.js y un frontend en React. Ambos servicios están configurados para ejecutarse en contenedores Docker y se comunican entre sí a través de una red definida en Docker Compose.

## Estructura del proyecto

- **\`backend/\`**: Contiene el código del backend (API en Node.js + Express).
- **\`frontend/\`**: Contiene el código del frontend (React + Bootstrap).
- **\`docker-compose.yml\`**: Configuración de Docker Compose para levantar ambos servicios.

## Requisitos previos

- Docker y Docker Compose instalados.
- Node.js (opcional, para desarrollo local).

## Configuración y ejecución

1. **Clonar el repositorio:**

   ```bash
   git clone https://github.com/jenrique2494/testToolbox.git
   cd testToolbox
   ```

2. **Construir y levantar los servicios con Docker Compose:**

   ```bash
   docker-compose up --build
   ```

3. **Acceder a los servicios:**

   Backend: <http://localhost:3000>

   Frontend: <http://localhost:3001>

## Endpoints del Backend

- **GET /files/list**: Obtiene la lista de archivos disponibles.
- **GET /files/data**: Obtiene los datos de los archivos procesados.
- **GET /files/data?fileName=\<nombre\>**: Filtra los datos por nombre de archivo.

## Tecnologías utilizadas

- **Backend**: Node.js, Express, Axios, Mocha, Chai.
- **Frontend**: React, React Bootstrap, Axios.
- **Infraestructura**: Docker, Docker Compose.
