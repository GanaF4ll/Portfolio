const Projet = require("../models/projetModel");

exports.create_a_projet = async (req, res) => {
  try {
    const newProjet = new Projet({
      title: req.body.title,
      link: req.body.link,
      description: req.body.description,
      image: req.body.image,
      completed: req.body.completed,
    });
    const projet = await newProjet.save();
    res.status(201).json({ message: `Projet created: ${projet.title}` });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Projet not created" });
  }
};

exports.list_all_projets = async (req, res) => {
  try {
    const projets = await Projet.find({});
    res.status(200).json(projets);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Projet not found" });
  }
};

exports.read_a_projet = async (req, res) => {
  try {
    const projet = await Projet.findById(req.params.projetId);
    res.status(200).json(projet);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Projet not found" });
  }
};

exports.update_a_projet = async (req, res) => {
  try {
    const projet = await Projet.findByIdAndUpdate(
      req.params.projetId,
      req.body,
      { new: true }
    );
    res.status(200).json({ message: `Projet updated: ${projet.title}` });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Projet not updated" });
  }
};

exports.delete_a_projet = async (req, res) => {
  try {
    await Projet.findByIdAndDelete(req.params.projetId);
    res.status(200).json({ message: "Projet deleted" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Projet not deleted" });
  }
};
