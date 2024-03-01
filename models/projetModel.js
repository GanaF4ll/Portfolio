const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let projetSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
  },
  image: {
    type: String,
  },
  completed: Boolean,
});

module.exports = mongoose.model("Projet", projetSchema);
