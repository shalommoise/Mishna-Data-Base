const siyumRouter = require("express").Router();
const { getSingleSiyumList, postMasechtaLearn, patchUserDetails} = require("../controllers/siyumim.controllers")

siyumRouter.route("/:admin_id").get(getSingleSiyumList).post(postMasechtaLearn).patch(patchUserDetails)

module.exports = siyumRouter;