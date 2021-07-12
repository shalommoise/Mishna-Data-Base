const siyumimRouter = require("express").Router();
const {postSiyum, getSiyumim, getSingleSiyum, postMasechtaLearn} = require("../controllers/siyumim.controllers")

siyumimRouter.route("/").post(postSiyum).get(getSiyumim);
siyumimRouter.route("/:admin_id").get(getSingleSiyum).post(postMasechtaLearn)

module.exports = siyumimRouter;