const express = require('express');
const router = express.Router();
const ocorrenciasService = require('../service/serviceOcorrencia');
const middlewares = require('../middlewares/index');

router.get('/', async (req, res) => {
  try {
    const result = await ocorrenciasService.getOcorrencias();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
});

router.post('/', middlewares.verifyOcorrencias, async (req, res) => {
  const { descricao, dataHora, categoria, endereco } = req.body;

  await ocorrenciasService.postOcorrencias(descricao, dataHora, categoria, endereco);

  res.status(200).json(req.body);
});

module.exports = router;