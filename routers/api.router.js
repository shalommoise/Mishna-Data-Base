const apiRouter = require("express").Router();
const sedarimRouter = require("./sedarim.router");
const masechtaRouter = require("./masechtos.router");
const mishnayosRouter = require("./mishnayos.router")
apiRouter.use("/sedarim", sedarimRouter);
apiRouter.use("/masechtos", masechtaRouter);
apiRouter.use("/mishnayos", mishnayosRouter);
module.exports = apiRouter;