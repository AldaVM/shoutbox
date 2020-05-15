const memoryCache = require("memory-cache");
const { CACHE_KEY } = require("../config");

module.exports = (duration) => {
  return (err, req, res, next) => {
    let key = CACHE_KEY + req.originUrl || req.url;
    let cachedBody = mcache.get(key);

    if (cachedBody) {
      res.send(cachedBody);
      return;
    } else {
      res.sendResponse = req.send;
      res.send = (body) => {
        memoryCache.put(key, body, duration * 1000);
        res.sendResponse(body);
      };
      next();
    }
  };
};
