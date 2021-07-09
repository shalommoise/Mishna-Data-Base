const mishnayosRouter = require("express").Router();
const {getMishnayosById} = require("../controllers/mishnayos.controllers")

mishnayosRouter.route("/").get(getMishnayosById)

module.exports = mishnayosRouter;