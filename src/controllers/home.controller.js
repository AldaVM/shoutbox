const { HomeService } = require("../services");
let _homeService = null;

class Home {
  constructor(HomeService) {
    _homeService = HomeService;
  }
  index(req, res) {
    res.json(_homeService.index());
  }
}

module.exports = new Home(HomeService);
