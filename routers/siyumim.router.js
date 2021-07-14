const siyumimRouter = require("express").Router();
const {postSiyum, getSiyumim, getSiyumDetails, patchSiyumDetails} = require("../controllers/siyumim.controllers")

siyumimRouter.route("/").post(postSiyum).get(getSiyumim);

siyumimRouter.route("/:admin_id").get(getSiyumDetails).patch(patchSiyumDetails);
module.exports = siyumimRouter;