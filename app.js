const express = require('express');
const app = express();
const PORT = 3000;
// Middleware para parsear el cuerpo de las solicitudes en formato JSON
app.use(express.json());
// Definimos una ruta GET en la raíz ('/')
app.get('/', (req, res) => {
 // Enviamos una respuesta simple como texto
 res.send('¡Hola, mundo!');
});
// Definimos una ruta POST en '/api/data'
app.post('/api/data', (req, res) => {
 // Capturamos los datos enviados en el cuerpo de la solicitud
 const data = req.body;
 // Enviamos los datos recibidos de vuelta como respuesta
 res.json({
 message: 'Datos recibidos',
 data: data
 });
});
// Iniciamos el servidor y escuchamos en el puerto definido
app.listen(PORT, () => {
 console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
