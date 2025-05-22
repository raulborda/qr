const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.all('/webhook', (req, res) => {
    console.log('Webhook recibido:');
    console.log('Método:', req.method);
    console.log('Headers:', req.headers);
    console.log('Body:', req.body);
    console.log('Query params:', req.query);
    console.log('---');
    
    res.status(200).send('!OK QR leído!');
});

app.get('/', (req, res) => {
    res.send('Webhook servidor funcionando. Usa /webhook para las llamadas.');
});

app.listen(port, () => {
    console.log(`Servidor webhook corriendo en http://localhost:${port}`);
    console.log(`Endpoint: http://localhost:${port}/webhook`);
});

process.on('uncaughtException', (err) => {
    console.error('Error no capturado:', err);
});

process.on('unhandledRejection', (reason, promise) => {
    console.error('Promesa rechazada no manejada:', reason);
});