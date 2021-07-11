const siyumimRouter = require("express").Router();
const {postSiyum, getSiyumim} = require("../controllers/siyumim.controllers")

siyumimRouter.route("/").post(postSiyum).get(getSiyumim)

module.exports = siyumimRouter;