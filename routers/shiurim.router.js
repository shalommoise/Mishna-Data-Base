const shiurimRouter = require("express").Router();
const {getShiurByShiurId} = require("../controllers/shiurim.controllers")


shiurimRouter.route("/:shiur_id").get(getShiurByShiurId)

module.exports = shiurimRouter;