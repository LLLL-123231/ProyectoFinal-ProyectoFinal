const express = require('express');
const router = express.Router();
const multer = require('multer');
const { enviarReporte } = require('../controllers/reportController');

// Configuración de multer para manejar la subida de archivos
const storage = multer.memoryStorage(); // Almacenar la imagen en memoria (RAM)
const upload = multer({ storage: storage });

// Ruta para enviar un reporte con imagen
router.post('/enviar-reporte', upload.single('photo'), enviarReporte);

module.exports = router;
