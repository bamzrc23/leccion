const express = require('express');
const router = express();
const vehiculoController = require('../Controllers/vehiculoController');

// Ruta para crear un nuevo vehículo
router.post('/Vehiculos', vehiculoController.createVehiculo);

// Ruta para obtener todos los vehículos
router.get('/Vehiculos', vehiculoController.getVehiculos);

// Ruta para obtener un vehículo específico por su ID
//router.get('/Vehiculos/:id', vehiculoController.getVehiculo);

// Ruta para actualizar un vehículo por su ID
router.put('/Vehiculos/:id', vehiculoController.updateVehiculo);

// Ruta para eliminar un vehículo por su ID
router.delete('/Vehiculos/:id', vehiculoController.deleteVehiculo);

module.exports = router;