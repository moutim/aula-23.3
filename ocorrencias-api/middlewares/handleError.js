const handleError = (error, req, res, next) => {
  const erro = JSON.parse(error);

  res.status(erro.status).json({ message: erro.message });

  next();
};

module.exports = handleError;