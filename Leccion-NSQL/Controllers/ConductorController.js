const Conductor = require('../Models/Conductor');

// Controlador para crear un nuevo conductor
exports.createConductor = async(req, res) => {
    try {
        const nuevoConductor = await Conductor.create(req.body);
        res.status(201).json(nuevoConductor);
    } catch (error) {
        res.status(500).json({ error: 'No se pudo crear el conductor' });
    }
};

// Controlador para obtener todos los conductores
exports.getConductores = async(req, res) => {
    try {
        const conductores = await Conductor.find();
        res.status(200).json(conductores);
    } catch (error) {
        res.status(500).json({ error: 'No se pudieron obtener los conductores' });
    }
};

// Otros controladores para actualizar y eliminar conductores
// Controlador para actualizar un conductor
exports.updateConductor = async(req, res) => {
    try {
        const { id } = req.params;
        const conductorActualizado = await Conductor.findByIdAndUpdate(id, req.body, { new: true });
        if (!conductorActualizado) {
            return res.status(404).json({ error: 'Conductor no encontrado' });
        }
        res.status(200).json(conductorActualizado);
    } catch (error) {
        res.status(500).json({ error: 'No se pudo actualizar el conductor' });
    }
};

// Controlador para eliminar un conductor
exports.deleteConductor = async(req, res) => {
    try {
        const { id } = req.params;
        const conductorEliminado = await Conductor.findByIdAndRemove(id);
        if (!conductorEliminado) {
            return res.status(404).json({ error: 'Conductor no encontrado' });
        }
        res.status(204).json();
    } catch (error) {
        res.status(500).json({ error: 'No se pudo eliminar el conductor' });
    }
};