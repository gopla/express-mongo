const express = require("express");
const routes = express.Router();
module.exports = routes;

routes.use("/buku", require("../api/buku/BukuRouter"));
routes.use("/kategori", require("../api/kategori/kategoriRouter"));
routes.use("/anggota", require("../api/anggota/anggotaRouter"));
routes.use("/peminjaman", require("../api/peminjaman/peminjamanRouter"));
