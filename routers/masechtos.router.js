const masechtaRouter = require("express").Router();
const {getAllMasechtos} = require("../controllers/masechtos.contollers")

masechtaRouter.route("/").get(getAllMasechtos)


module.exports = masechtaRouter;