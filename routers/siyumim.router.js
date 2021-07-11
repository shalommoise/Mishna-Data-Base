const siyumimRouter = require("express").Router();
const {postSiyum} = require("../controllers/siyumim.controllers")

siyumimRouter.route("/").post(postSiyum)

module.exports = siyumimRouter;