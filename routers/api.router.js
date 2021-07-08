const apiRouter = require("express").Router();
const sedarimRouter = require("./sedarim.router");

apiRouter.use("/sedarim", sedarimRouter);

module.exports = apiRouter;