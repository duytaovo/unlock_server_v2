const { Task } = require("../models");

const getAllTask = async (req, res) => {
  const taskList = await Task.findAll();
  res.status(200).send(taskList);
};

const updateTask = async (req, res) => {
  const { id } = req.params;
  const { title, body, status } = req.body;
  await Trip.update(
    { title, body, status },
    {
      where: {
        id,
      },
    }
  );
  res.send(`Đã update thành công task có id là : ${id} `);
};

module.exports = {
  getAllTask,
  updateTask,
};
