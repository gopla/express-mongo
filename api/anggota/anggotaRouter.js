const express = require("express");
const router = express.Router();
const con = require("./anngotaController");

router.get("/", con.index);
router.get("/:id", con.show);
router.post("/", con.store);
router.put("/:id", con.update);
router.delete("/:id", con.delete);
router.post("/login", con.auth);

module.exports = router;
