const mongoose = require('mongoose');

const viajeSchema = new mongoose.Schema({
    vehiculo: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Vehiculo',
    },
    origen: String,
    destino: String,
    fecha: Date,
    gastosViaticos: Number,
    guias: [String], // Puedes usar un array para las guías
    // Otros campos relacionados con los viajes
});

const Viaje = mongoose.model('Viaje', viajeSchema);

module.exports = Viaje;