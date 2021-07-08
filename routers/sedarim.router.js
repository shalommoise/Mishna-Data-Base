const sedarimRouter = require("express").Router();
const {getSedarim} = require("../controllers/sedarim.controllers")

sedarimRouter.route("/").get(getSedarim);

module.exports = sedarimRouter