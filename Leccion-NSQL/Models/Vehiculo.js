const mongoose = require('mongoose');
const vehiculoSchema = new mongoose.Schema({ peso: Number, placa:String });

const Vehiculo = mongoose.model('Vehiculo', vehiculoSchema);

module.exports = Vehiculo;