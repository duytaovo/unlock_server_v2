const express = require("express");
const authRouter = express.Router();
const {
  adminLoginController,
  createAdminAccount,
} = require("../controller/adminController");

authRouter.post("/admin", adminLoginController);
authRouter.post("/admin/new", createAdminAccount);

module.exports = authRouter;
