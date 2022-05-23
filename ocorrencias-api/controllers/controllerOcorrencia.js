const express = require('express');
const router = express.Router();
const ocorrenciasService = require('../service/serviceOcorrencia')

router.get('/', async (req, res) => {
  try {
    const result = await ocorrenciasService.getOcorrencias();
    console.log(result)
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
});

module.exports = router;