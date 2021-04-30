const route = require("./route");
const dashRoute = require("./dash");
const farmRoute = require("./farm");
const stakeRoute = require("./stake");
const zeldaRoute = require("./zelda");

class Routes {
  constructor(app) {
    this.app = app;
  }
  configRoutes() {
    this.app.use("/", route);
    this.app.use("/dash", dashRoute);
    this.app.use("/farm", farmRoute);
    this.app.use("/stake", stakeRoute);
    this.app.use("/zelda", zeldaRoute);
  }
}

module.exports = Routes;
