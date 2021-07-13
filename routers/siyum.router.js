const siyumRouter = require("express").Router();
const { getSingleSiyumList, postMasechtaLearn} = require("../controllers/siyumim.controllers")

siyumRouter.route("/:admin_id").get(getSingleSiyumList).post(postMasechtaLearn)

module.exports = siyumRouter;