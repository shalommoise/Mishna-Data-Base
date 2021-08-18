const mishnaRouter = require("express").Router();
const {getMasechtaDetailsFromIds} = require("../controllers/mishna.contollers")

mishnaRouter.route("/").get(getMasechtaDetailsFromIds)



module.exports = mishnaRouter;