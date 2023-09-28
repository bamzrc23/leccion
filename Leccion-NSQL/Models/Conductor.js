const mongoose = require('mongoose');
const conductorSchema = new mongoose.Schema({ nombre: String });

const Conductor = mongoose.model('Conductor', conductorSchema);

module.exports = Conductor;