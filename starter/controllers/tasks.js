const getAllTasks = (req, res) => {
  res.send("all items from the file");
};

const createTask = (req, res) => {
  const { body } = req;
  console.log(req);
  res.json(req.body);
};

const getTask = (req, res) => {
  res.json({ id: req.params.id });
};

const updateTask = (req, res) => {
  res.send("update task");
};

const deleteTask = (req, res) => {
  res.send("delete task");
};

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
};
