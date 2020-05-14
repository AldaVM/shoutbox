function routeNoFound(req, res, next) {
  const err = new Error("Ruta no encontrada");
  err.status = 404;
  next(err);
}

module.exports = routeNoFound;
