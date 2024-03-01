const express = require("express");
const router = express.Router();
const projetController = require("../controllers/projetController");

router.post("/", projetController.create_a_projet);
router.get("/", projetController.list_all_projets);
router.get("/:projetId", projetController.read_a_projet);
