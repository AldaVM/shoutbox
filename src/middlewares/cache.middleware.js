const memoryCache = require("memory-cache");
const { CACHE_KEY } = require("../config");

module.exports = (duration) => {
  return (req, res, next) => {
    const key = CACHE_KEY + req.originUrl || req.url;
    const cachedBody = mcache.get(key);

    if (cachedBody) {
      res.json({
        cachedBody,
      });
    } else {
      res.sendResponse = req.json;
      res.json = (body) => {
        memoryCache.put(key, body, duration * 1000);
        res.sendResponse(body);
      };
      next();
    }
  };
};
