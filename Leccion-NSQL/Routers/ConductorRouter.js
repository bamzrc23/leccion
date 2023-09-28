var express = require('express');
var router = express();
var conductorController = require('../Controllers/ConductorController');

// Ruta para crear un nuevo conductor
router.post('/conductoressave', conductorController.createConductor);

// Ruta para obtener todos los conductores
router.get('/conductores', conductorController.getConductores);

// Ruta para obtener un conductor específico por su ID
//router.get('/conductores/:id', conductorController.getConductorById);

// Ruta para actualizar un conductor por su ID
router.put('/conductores/:id', conductorController.updateConductor);

// Ruta para eliminar un conductor por su ID
router.delete('/conductores/:id', conductorController.deleteConductor);

module.exports = router;