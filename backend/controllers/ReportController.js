const { Report } = require('../models');

const enviarReporte = async (req, res) => {
  try {
    const { cedula, nombre, email, problema, descripcion } = req.body;
    const photo = req.file ? req.file.buffer : null;

    const newReport = await Report.create({
      cedula,
      nombre,
      email,
      problema,
      descripcion,
      photo,
    });

    res.status(200).send('El reporte se envió correctamente.');
  } catch (error) {
    console.error('Error al enviar el reporte: ', error);
    res.status(500).send('Hubo un error al enviar el reporte. Por favor, inténtalo de nuevo más tarde.');
  }
};

module.exports = {
  enviarReporte,
};
