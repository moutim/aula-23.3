const connection = require('./connection');

const getAll = async () => {
  const [rows] = await connection.execute('SELECT * FROM `ocorrencias-cidade`.ocorrencias;');

  return rows;
};

const addAddress = async ({ logradouro, numero, bairro, cep }) => {
  const [rows] = await connection.execute(
    'INSERT INTO `ocorrencias-cidade`.endereco (logradouro, numero, bairro, cep) VALUES (?, ?, ?, ?)',
    [logradouro, numero, bairro, cep]
  );

  return rows;
} 

const addOccurrence = async (descricao, dataHora, categoria, id_endereco) => connection.execute(
  'INSERT INTO `ocorrencias-cidade`.ocorrencias (descricao, dataHora, categoria, id_endereco) VALUES (?, ?, ?, ?)',
  [descricao, dataHora, categoria, id_endereco]
);

module.exports = {
  getAll,
  addAddress,
  addOccurrence,
}