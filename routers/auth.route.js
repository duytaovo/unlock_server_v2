const express = require("express");
const authRouter = express.Router();

authRouter.post("/admin", (req, res) => {
  res.json("Login route");
});

module.exports = { authRouter };
