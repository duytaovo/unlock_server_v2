const jwt = require("jsonwebtoken");
const { notAuth } = require("../middlewares/authenticateToken");
module.exports.authenticateToken = (req, res, next) => {
  const authHeaders = req.headers["authorization"];
  const token = authHeaders && authHeaders.split(" ")[1];
  if (!token) return res.sendStatus(401);
  jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
};
module.exports.isAdmin = (permissions) => {
  return (req, res, next) => {
    const authHeaders = req.headers["authorization"];
    const token = authHeaders && authHeaders.split(" ")[1];
    if (!token) return res.sendStatus(401);

    jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
      if (err) return res.sendStatus(403);
      if (user) {
        req.user = user;
        if (!permissions.includes(user.permissions)) {
          return res.status(401).json("Bạn không có quyền chỉnh sửa");
        }
      }
      next();
    });
  };
};
