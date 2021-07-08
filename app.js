const express = require("express");
const app = express();
const apiRouter = require("./routers/api.router");


app.use(express.json());

app.use("/api", apiRouter);

// app.use("/api", function (req, res, next) {
//     console.log('Time:', Date.now())
//     next()
//   })
module.exports = app;