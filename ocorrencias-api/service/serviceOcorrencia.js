const ocorrenciaModel = require('../models/Ocorrencias');

const getOcorrencias = async () => {
  return await ocorrenciaModel.getAll();
};

module.exports = {
  getOcorrencias,
}