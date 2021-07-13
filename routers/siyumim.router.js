const siyumimRouter = require("express").Router();
const {postSiyum, getSiyumim, getSiyumDetails} = require("../controllers/siyumim.controllers")

siyumimRouter.route("/").post(postSiyum).get(getSiyumim);

siyumimRouter.route("/:admin_id").get(getSiyumDetails);
module.exports = siyumimRouter;