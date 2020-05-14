module.exports = (entity, config) => {
  const { status, message } = config;

  if (!entity) {
    const err = new Error();
    err.status = status;
    err.message = message;
    throw err;
  }
};
