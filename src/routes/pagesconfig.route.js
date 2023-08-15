const express = require("express");
const pagesRouter = express.Router();
const { getpagesConfig, updatePages } = require("../controller/pagesConfig");
const {
  authenticateToken,
  authenticateTokenAdmin,
  isAdmin,
} = require("../middlewares/authenticateToken");
pagesRouter.get("/getPages", getpagesConfig);

pagesRouter.put(
  "/updatePages",
  authenticateToken,
  isAdmin(["1", "2", "0", "-1", "3", "-2"]),
  updatePages
);

module.exports = pagesRouter;
