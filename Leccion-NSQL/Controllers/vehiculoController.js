const Vehiculo = require('../Models/Vehiculo');

// Controlador para crear un nuevo vehículo
exports.createVehiculo = async(req, res) => {
    try {
        const nuevoVehiculo = await Vehiculo.create(req.body);
        res.status(201).json(nuevoVehiculo);
    } catch (error) {
        res.status(500).json({ error: 'No se pudo crear el vehículo' });
    }
};

// Controlador para obtener todos los vehículos
exports.getVehiculos = async(req, res) => {
    try {
        const vehiculos = await Vehiculo.find();
        res.status(200).json(vehiculos);
    } catch (error) {
        res.status(500).json({ error: 'No se pudieron obtener los vehículos' });
    }
};

// Otros controladores para actualizar y eliminar vehículos
// Controlador para actualizar un vehículo
exports.updateVehiculo = async(req, res) => {
    try {
        const { id } = req.params;
        const vehiculoActualizado = await Vehiculo.findByIdAndUpdate(id, req.body, { new: true });
        if (!vehiculoActualizado) {
            return res.status(404).json({ error: 'Vehículo no encontrado' });
        }
        res.status(200).json(vehiculoActualizado);
    } catch (error) {
        res.status(500).json({ error: 'No se pudo actualizar el vehículo' });
    }
};

// Controlador para eliminar un vehículo
exports.deleteVehiculo = async(req, res) => {
    try {
        const { id } = req.params;
        const vehiculoEliminado = await Vehiculo.findByIdAndRemove(id);
        if (!vehiculoEliminado) {
            return res.status(404).json({ error: 'Vehículo no encontrado' });
        }
        res.status(204).json(); // Devuelve una respuesta vacía (sin contenido) cuando se elimina con éxito
    } catch (error) {
        res.status(500).json({ error: 'No se pudo eliminar el vehículo' });
    }
};

// ...