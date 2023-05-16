const mongoose = require("mongoose")
//create schema to respect during the request
// Used validation from mongoose
const TaskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "the property name is necessary to provide"],
    trim: true,
    maxlength: [20, "name can not be more than 20 caracters"],
  },
  completed: {
    type: Boolean,
    default: false,
  },
})

module.exports = mongoose.model("Task", TaskSchema)
