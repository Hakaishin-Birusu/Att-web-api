const route = require("./route");
class Routes {
  constructor(app) {
    this.app = app;
  }
  configRoutes() {
    this.app.use("/", route);
  }
}

module.exports = Routes;
