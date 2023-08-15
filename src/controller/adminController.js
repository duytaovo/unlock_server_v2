const { User } = require("../models");
const jwt = require("jsonwebtoken");
module.exports.createAdminAccount = async (req, res) => {
  const admin = await User.create({
    username: "admin",
    password: "admin",
    permissions: 1,
  });
  res.json({ admin });
};

module.exports.adminLoginController = async (req, res) => {
  const { username, password } = req.body;
  const found = await User.count({ where: { username } });
  if (!found)
    return res
      .status(404)
      .json("Incorrect username or you haven't registed yet!");
  const admin = await User.findOne({ where: { username } });
  if (admin.password !== password)
    return res.status(401).json("Incorrect password!");
  const accessToken = jwt.sign(
    {
      userID: admin.id,
      username: admin.username,
      permissions: admin.permissions,
    },
    process.env.SECRET_KEY
  );
  res.json({ accessToken });
};
