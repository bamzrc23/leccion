const express = require('express');
const router = express.Router();
const viajeController = require('../Controllers/ViajeController');

// Ruta para crear un nuevo viaje
router.post('/viajes', viajeController.createViaje);

// Ruta para obtener todos los viajes
router.get('/viajes', viajeController.getViajes);

// Ruta para obtener un viaje específico por su ID
//router.get('/viajes/:id', viajeController.getViajeById);

// Ruta para actualizar un viaje por su ID
router.put('/viajes/:id', viajeController.updateViaje);

// Ruta para eliminar un viaje por su ID
router.delete('/viajes/:id', viajeController.deleteViaje);

module.exports = router;