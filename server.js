const express = require("express");
const path = require("path");
const { sequelize } = require("./src/models");
const { rootRouter } = require("./src/routes");

const Fingerprint = require("express-fingerprint");
const cors = require("cors");
const authRouter = require("./src/routes/auth.route");
const { authenticateToken } = require("./src/middlewares/authenticateToken");
require("dotenv").config();

const app = express();
app.use(cors());

//cài đặt Fingerprint
app.use(Fingerprint());

// cài ứng dụng sử dụng kiểu json
app.use(express.json());

// cài static file
const publicPathDirectory = path.join(__dirname, "./public");
app.use("/public", express.static(publicPathDirectory));

// dùng router
app.use("/api", rootRouter);

app.post("/test", authenticateToken, (req, res) =>
  res.json(req.user.permissions)
);

// lắng nghe sự kiện kết nối
app.listen(8080, async () => {
  console.log("App listening on http://localhost:8080");
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
});
