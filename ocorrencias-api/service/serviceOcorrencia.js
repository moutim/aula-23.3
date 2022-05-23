const ocorrenciaModel = require('../models/Ocorrencias');

const getOcorrencias = async () => {
  return await ocorrenciaModel.getAll();
};

const postOcorrencias = async (descricao, dataHora, categoria, endereco) => {
  const { insertId } = await ocorrenciaModel.addAddress(endereco);
  
  await ocorrenciaModel.addOccurrence(descricao, dataHora, categoria, insertId);

  return address;
};

module.exports = {
  getOcorrencias,
  postOcorrencias
}