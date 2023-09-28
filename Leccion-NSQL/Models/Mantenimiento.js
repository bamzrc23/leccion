const mongoose = require('mongoose');

const mantenimientoSchema = new mongoose.Schema({
    vehiculo: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Vehiculo',
    },
    fechaMantenimiento: Date,
    kilometraje: Number,
    fechaProximoMantenimiento: Date,
    costo: Number,
    repuestosUtilizados: [{
        nombreRepuesto: String,
        cantidad: Number,
        // Otros detalles de los repuestos
    }, ],
    // Otros campos relacionados con los mantenimientos
});

const Mantenimiento = mongoose.model('Mantenimiento', mantenimientoSchema);

module.exports = Mantenimiento;