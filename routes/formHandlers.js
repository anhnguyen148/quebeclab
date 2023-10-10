const express = require("express");
const controller = require("../controllers/validate");

const router = express.Router();

router.post("/insert", controller.insert);

router.post("/update", controller.update);
router.post("/delete", controller.delete);

module.exports = router;