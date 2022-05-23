const connection = require('./connection');

const getAll = async () => {
  const [rows] = await connection.execute('SELECT * FROM `ocorrencias-cidade`.ocorrencias;');
  return rows;
}

module.exports = {
  getAll,
}