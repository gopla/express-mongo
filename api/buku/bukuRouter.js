const express = require("express");
const router = express.Router();
const controller = require("./BukuController");

router.get("/", controller.index);
router.get("/:id", controller.show);
router.post("/", controller.store);
router.put("/:id", controller.update);
router.delete("/:id", controller.delete);

module.exports = router;
