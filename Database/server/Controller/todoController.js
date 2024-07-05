const todoModel = require("../models/todoModel");

module.exports.getTodo = async (req, res) => {
  const toDos  = await todoModel.find();
  res.send(toDos );
};
module.exports.saveTodo = (req, res) => {
  const { toDo } = req.body;

  todoModel
    .create({ toDo })
    .then((data) => {
      console.log("Todo Saved....");
      res.send(data).status(200);
    })
    .catch((err) => {
      console.log(err);
      res.send({ error: err, msg: "Something went wrong!" });
    });
};

module.exports.updateTodo = (req, res) => {
  const { id } = req.params;
  const { toDo } = req.body;

  todoModel
    .findByIdAndUpdate(id, { toDo })
    .then(res.send("Todo data updated....").status(201))
    .catch((err) => {
      console.log(err);
      res.send({ error: err, msg: "Something went wrong!" });
    });
};
module.exports.deleteTodo = (req, res) => {
  const { id } = req.params;

  todoModel
    .findByIdAndDelete(id)
    .then(res.send("Todo data deleted...."))
    .catch((err) => {
      console.log(err);
      res.send({ error: err, msg: "Something went wrong!" });
    });
};
