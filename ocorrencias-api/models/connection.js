const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: 'localhost',
  port: '3306',
  user: 'trybe',
  password: 'trybe12345',
  database: 'ocorrencias-cidade'
});

module.exports = connection;