const apiRouter = require("express").Router();
const sedarimRouter = require("./sedarim.router");
const masechtaRouter = require("./masechtos.router");
const mishnayosRouter = require("./mishnayos.router");
const shiurimRouter = require("./shiurim.router");
const siyumimRouter = require("./siyumim.router")
const siyumRouter = require("./siyum.router")
apiRouter.use("/sedarim", sedarimRouter);
apiRouter.use("/masechtos", masechtaRouter);
apiRouter.use("/mishnayos", mishnayosRouter);
apiRouter.use("/shiurim", shiurimRouter);
apiRouter.use("/siyumim", siyumimRouter);
apiRouter.use("/siyum", siyumRouter);
module.exports = apiRouter;