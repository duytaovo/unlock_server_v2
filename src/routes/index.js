const express = require("express");
const authRouter = require("./auth.route.js");
// const { tasksRouters } = require("./tasks.routers");
const rootRouter = express.Router();

// rootRouter.use("/tasks", tasksRouters);
rootRouter.use("/auth", authRouter);
module.exports = {
  rootRouter,
};
