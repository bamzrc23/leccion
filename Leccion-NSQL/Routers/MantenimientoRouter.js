const express = require('express');
const router = express.Router();
const mantenimientoController = require('../Controllers/MantenimientoController');

// Ruta para crear un nuevo mantenimiento
router.post('/mantenimientos', mantenimientoController.createMantenimiento);

// Ruta para obtener todos los mantenimientos
router.get('/mantenimientos', mantenimientoController.getMantenimientos);

// Ruta para obtener un mantenimiento específico por su ID
//router.get('/mantenimientos/:id', mantenimientoController.getMantenimientoById);

// Ruta para actualizar un mantenimiento por su ID
router.put('/mantenimientos/:id', mantenimientoController.updateMantenimiento);

// Ruta para eliminar un mantenimiento por su ID
router.delete('/mantenimientos/:id', mantenimientoController.deleteMantenimiento);

module.exports = router;