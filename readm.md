### Products Table Stencil Component
# Descripción
Este proyecto es un componente web reutilizable construido con Stencil, que muestra una tabla de productos obtenidos de una API REST. El componente se puede integrar fácilmente en otras aplicaciones web para visualizar una lista de productos con sus respectivos detalles.

# Instalación
1. Clonar el repositorio:
git clone https://github.com/tu-usuario/products-table.git
cd products-table


2. Instalar las dependencias:
Asegúrate de tener Node.js instalado, luego ejecuta:
npm install

# Uso
**Configuración del servidor**
El proyecto incluye un servidor Express que sirve los archivos generados por Stencil y redirige las solicitudes de API al backend.

1. Iniciar el servidor de desarrollo:

npm run start:dev

Esto compilará el proyecto en modo de desarrollo y levantará el servidor en http://localhost:3334.

2. Acceder al componente:

Abre tu navegador y navega a http://localhost:3334 para ver el componente products-table en acción.

# Integración del componente
Puedes integrar el componente products-table en cualquier página HTML con el siguiente código:
<products-table api-url="http://localhost:3001/api/products"></products-table>

# Scripts disponibles
npm run build: Compila el proyecto en modo producción.
npm run start: Inicia el servidor Express en http://localhost:3334.
npm run start:dev: Compila el proyecto en modo de desarrollo y luego inicia el servidor.
npm run test: Ejecuta las pruebas unitarias y end-to-end.
npm run test.watch: Ejecuta las pruebas en modo observación, útil durante el desarrollo.
npm run generate: Genera un nuevo componente Stencil.

# Configuración
El archivo stencil.config.ts contiene la configuración del proyecto. Aquí puedes ajustar los diferentes outputTargets, activar/desactivar service workers, y configurar el entorno de pruebas.

# Estructura del proyecto
src/components/products-table/: Contiene el código fuente del componente products-table.
products-table.tsx: Componente principal que maneja la lógica y renderizado de la tabla.
products-table.css: Estilos específicos del componente.
server.js: Servidor Express que sirve los archivos estáticos y redirige las solicitudes de API.
puppeteer script.js: Script para automatizar pruebas y capturas de pantalla con Puppeteer.
stencil.config.ts: Configuración de Stencil.
package.json: Define las dependencias y scripts del proyecto

# Componentes
**products-table**
El componente products-table es el núcleo del proyecto. Este componente:

Realiza una solicitud fetch a la URL proporcionada en apiUrl para obtener la lista de productos.
Muestra los productos en una tabla con columnas para ID, nombre, precio, imagen y stock.
Maneja errores de conexión a la API y los muestra en la UI.
**Props**
apiUrl: URL de la API REST desde la cual se obtienen los productos. Por defecto, se configura como http://localhost:3001/api/products.

# API
El proyecto tiene la existencia de una API REST que devuelva una lista de productos en formato JSON. 

# Desarrollo y pruebas
Pruebas unitarias y end-to-end
Las pruebas se configuran en stencil.config.ts y se pueden ejecutar usando npm run test. Este proyecto también incluye un script de Puppeteer (puppeteer script.js) para realizar pruebas de automatización, como capturas de pantalla de la API.

# Desarrollo
Durante el desarrollo, usa npm run start:dev para compilar el proyecto en modo de desarrollo. Stencil soporta recarga en caliente, por lo que los cambios se reflejarán inmediatamente.