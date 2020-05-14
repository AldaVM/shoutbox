function routeNoFound(req, res, next) {
  const err = new Error("Route not found");
  err.status = 404;
  next(err);
}

module.exports = routeNoFound;
