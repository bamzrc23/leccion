const Mantenimiento = require('../Models/Mantenimiento');

// Controlador para crear un nuevo mantenimiento
exports.createMantenimiento = async(req, res) => {
    try {
        const nuevoMantenimiento = await Mantenimiento.create(req.body);
        res.status(201).json(nuevoMantenimiento);
    } catch (error) {
        res.status(500).json({ error: 'No se pudo crear el mantenimiento' });
    }
};

// Controlador para obtener todos los mantenimientos
exports.getMantenimientos = async(req, res) => {
    try {
        const mantenimientos = await Mantenimiento.find();
        res.status(200).json(mantenimientos);
    } catch (error) {
        res.status(500).json({ error: 'No se pudieron obtener los mantenimientos' });
    }
};

// Otros controladores para actualizar y eliminar mantenimientos
// Controlador para actualizar un mantenimiento
exports.updateMantenimiento = async(req, res) => {
    try {
        const { id } = req.params;
        const mantenimientoActualizado = await Mantenimiento.findByIdAndUpdate(id, req.body, { new: true });
        if (!mantenimientoActualizado) {
            return res.status(404).json({ error: 'Mantenimiento no encontrado' });
        }
        res.status(200).json(mantenimientoActualizado);
    } catch (error) {
        res.status(500).json({ error: 'No se pudo actualizar el mantenimiento' });
    }
};

// Controlador para eliminar un mantenimiento
exports.deleteMantenimiento = async(req, res) => {
    try {
        const { id } = req.params;
        const mantenimientoEliminado = await Mantenimiento.findByIdAndRemove(id);
        if (!mantenimientoEliminado) {
            return res.status(404).json({ error: 'Mantenimiento no encontrado' });
        }
        res.status(204).json();
    } catch (error) {
        res.status(500).json({ error: 'No se pudo eliminar el mantenimiento' });
    }
};