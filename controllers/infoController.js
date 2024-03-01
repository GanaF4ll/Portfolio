const Info = require("../models/infoModel");

exports.create_an_info = async (req, res) => {
  try {
    const newInfo = new Info({
      title: req.body.title,
      value: req.body.value,
    });
    const info = await newInfo.save();
    res.status(201).json({ message: `Info created: ${info.title}` });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Info not created" });
  }
};

exports.list_all_infos = async (req, res) => {
  try {
    const infos = await Info.find({});
    res.status(200).json(infos);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Info not found" });
  }
};

exports.update_an_info = async (req, res) => {
  try {
    const info = await Info.findByIdAndUpdate(req.params.infoId, req.body, {
      new: true,
    });
    res.status(200).json({ message: `Info updated: ${info.title}` });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Info not updated" });
  }
};
