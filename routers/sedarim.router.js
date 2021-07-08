const sedarimRouter = require("express").Router();
const {getSedarim} = require("../controllers/sedarim.controllers")
const {getMasechtosBySeder} = require("../controllers/masechtos.contollers")

sedarimRouter.route("/").get(getSedarim);
sedarimRouter.route("/:seder").get(getMasechtosBySeder);

module.exports = sedarimRouter;