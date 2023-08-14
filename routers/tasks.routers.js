const express = require("express");
const { getAllTask, updateTask } = require("../controllers/task.controllers");
const tasksRouters = express.Router();

// tasksRouters.get("/", getAllTask);
// tasksRouters.put("/:id", updateTask);
// module.exports = {
//   tasksRouters,
// };
