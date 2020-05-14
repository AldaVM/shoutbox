function genericError(err, req, res, next) {
  res.status(err.status).json({
    status: err.status || 500,
    message: err.message,
  });
}

module.exports = genericError;
