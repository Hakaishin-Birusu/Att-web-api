const route = require("./route");
const dashRoute = require("./dash");
const stakeRoute = require("./stake");
const xAttRoute = require("./xAtt");
const zeldaRoute = require("./zelda");

class Routes {
  constructor(app) {
    this.app = app;
  }
  configRoutes() {
    this.app.use("/", route);
    this.app.use("/dash", dashRoute);
    this.app.use("/stake", stakeRoute);
    this.app.use("/xatt", xAttRoute);
    this.app.use("/zelda", zeldaRoute);
  }
}

module.exports = Routes;
