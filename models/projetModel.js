const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let projetSchema = new Schema({});

module.exports = mongoose.model("Projet", projetSchema);
