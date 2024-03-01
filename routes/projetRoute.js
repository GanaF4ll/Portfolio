const express = require("express");
const router = express.Router();
const projetController = require("../controllers/projetController");

router.post("/add", projetController.create_a_projet);
router.get("/all", projetController.list_all_projets);
router.get("/:projetId", projetController.read_a_projet);

module.exports = router;
