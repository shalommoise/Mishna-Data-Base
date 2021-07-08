const apiRouter = require("express").Router();
const sedarimRouter = require("./sedarim.router");
const masechtaRouter = require("./masechtos.router");
apiRouter.use("/sedarim", sedarimRouter);
apiRouter.use("/masechtos", masechtaRouter);

module.exports = apiRouter;