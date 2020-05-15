module.exports = {
  genericError: require("./error.middleware"),
  routeNoFound: require("./no-found.middleware"),
  catchAsync: require("./catch-async.middleware"),
  authVerify: require("./auth.middleware"),
  cacheMiddleware: require("./cache.middleware"),
};
