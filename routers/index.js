const express = require("express");
const { tasksRouters } = require("./tasks.routers");
const { authRouter } = require("./auth.route");
const rootRouter = express.Router();

// rootRouter.use("/tasks", tasksRouters);
rootRouter.use("/auth", authRouter);
module.exports = {
  rootRouter,
};
