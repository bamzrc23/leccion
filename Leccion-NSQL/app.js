const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();

// Importa las rutas de tus modelos
const vehiculoRoutes = require('./Routers/VehiculoRouter');
const conductorRoutes = require('./Routers/ConductorRouter');
const viajeRoutes = require('./Routers/ViajeRouter');
const mantenimientoRoutes = require('./Routers/MantenimientoRouter');

// Conexión a la base de datos MongoDB (puedes personalizar la URL de conexión)
mongoose.connect('mongodb://127.0.0.1:27017/leccion', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log('Conexión a MongoDB establecida.');
    })
    .catch((error) => {
        console.error('Error en la conexión a MongoDB:', error);
    });

// Middleware para el análisis de solicitudes JSON
app.use(bodyParser.json());

// Rutas de tus modelos
app.use('/api', vehiculoRoutes);
app.use('/api', conductorRoutes);
app.use('/api', viajeRoutes);
app.use('/api', mantenimientoRoutes);

// Puerto en el que escucha el servidor
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Servidor en funcionamiento en el puerto ${PORT}`);
});