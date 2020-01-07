const express = require("express");
const router = express.Router();
const con = require("./peminjamanController");

router.get("/", con.index);
router.get("/:id", con.show);
router.post("/", con.store);
router.put("/:id", con.update);
router.delete("/:id", con.delete);

router.get("/anggota/:id_anggota", con.anggotaPinjam);
router.get("/anggota/:id_anggota/:id", con.anggotaPinjamFindOne);

router.put("/ubahStatus", con.ubahStatusPinjam);

module.exports = router;
