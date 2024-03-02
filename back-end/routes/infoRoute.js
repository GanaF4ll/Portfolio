const express = require("express");
const router = express.Router();
const infoController = require("../controllers/infoController");

router.post("/add", infoController.create_an_info);
router.get("/all", infoController.list_all_infos);
router.put("/:infoId", infoController.update_an_info);

module.exports = router;
