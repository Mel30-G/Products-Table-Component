const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const path = require('path');

const app = express();

// Proxy para redirigir las solicitudes API
app.use('/api', createProxyMiddleware({
  target: 'http://localhost:3001/api/products',
  changeOrigin: true,
}));

// Servir los archivos estáticos generados por Stencil
app.use(express.static(path.join(__dirname, 'www')));

// Manejar cualquier otra ruta y redirigirla al index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'www', 'index.html'));
});

const PORT = process.env.PORT || 3334;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
