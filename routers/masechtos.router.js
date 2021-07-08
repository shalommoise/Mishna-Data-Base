const masechtaRouter = require("express").Router();
const {getAllMasechtos, getSingleMasechtaDetails} = require("../controllers/masechtos.contollers")

masechtaRouter.route("/").get(getAllMasechtos)
masechtaRouter.route("/summary/:masechta").get(getSingleMasechtaDetails)

module.exports = masechtaRouter;