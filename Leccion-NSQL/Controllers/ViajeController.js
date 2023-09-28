const Viaje = require('../Models/Viaje');

// Controlador para crear un nuevo viaje
exports.createViaje = async(req, res) => {
    try {
        const nuevoViaje = await Viaje.create(req.body);
        res.status(201).json(nuevoViaje);
    } catch (error) {
        res.status(500).json({ error: 'No se pudo crear el viaje' });
    }
};

// Controlador para obtener todos los viajes
exports.getViajes = async(req, res) => {
    try {
        const viajes = await Viaje.find();
        res.status(200).json(viajes);
    } catch (error) {
        res.status(500).json({ error: 'No se pudieron obtener los viajes' });
    }
};

// Otros controladores para actualizar y eliminar viajes
// Controlador para actualizar un viaje
exports.updateViaje = async(req, res) => {
    try {
        const { id } = req.params;
        const viajeActualizado = await Viaje.findByIdAndUpdate(id, req.body, { new: true });
        if (!viajeActualizado) {
            return res.status(404).json({ error: 'Viaje no encontrado' });
        }
        res.status(200).json(viajeActualizado);
    } catch (error) {
        res.status(500).json({ error: 'No se pudo actualizar el viaje' });
    }
};

// Controlador para eliminar un viaje
exports.deleteViaje = async(req, res) => {
    try {
        const { id } = req.params;
        const viajeEliminado = await Viaje.findByIdAndRemove(id);
        if (!viajeEliminado) {
            return res.status(404).json({ error: 'Viaje no encontrado' });
        }
        res.status(204).json();
    } catch (error) {
        res.status(500).json({ error: 'No se pudo eliminar el viaje' });
    }
};