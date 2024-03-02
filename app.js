const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 4444;

mongoose.connect("mongodb://127.0.0.1:27017/Portfolio");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/projets", require("./back-end/routes/projetRoute"));
app.use("/infos", require("./back-end/routes/infoRoute"));

app.listen(port, () => {
  console.log(`Portfolio app is running on port ${port}`);
});
