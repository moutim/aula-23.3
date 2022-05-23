const express = require('express');
const router = express.Router();

//Health Checker controller
router.use('/healthchecker', require('./controllers/healthchecker'));

router.use('/ocorrencias', require('./controllers/controllerOcorrencia'));

module.exports = router;