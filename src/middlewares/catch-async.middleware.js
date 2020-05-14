module.exports = (ftn) => (req, res, next) => {
  return ftn(req, res, next).catch((error) => {
    const err = new Error(error.message);
    err.status = error.status || 500;

    next(err);
  });
};
