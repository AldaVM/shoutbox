class HomeService {
  index() {
    return {
      message: "Test service",
    };
  }
}

module.exports = new HomeService();
