const masechtaRouter = require("express").Router();
const {getAllMasechtos, getSingleMasechtaDetails} = require("../controllers/masechtos.contollers")
const {getMultipleMishnayos} =require("../controllers/mishnayos.controllers")
masechtaRouter.route("/").get(getAllMasechtos)
masechtaRouter.route("/:masechta/summary/").get(getSingleMasechtaDetails)
masechtaRouter.route("/:masechta/mishnayos/").get(getMultipleMishnayos)
module.exports = masechtaRouter;