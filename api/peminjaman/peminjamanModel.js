const mongoose = require("mongoose");

const peminjamanSchema = new mongoose.Schema(
  {
    anggota: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Anggota"
    },
    buku: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Buku"
    },
    tgl_pinjam: {
      type: Date,
      required: true,
      default: Date.now()
    },
    kembali: {
      type: Date,
      required: true,
      default: () => Date.now() + 7 * 24 * 60 * 60 * 1000
    },
    tgl_kembali: {
      type: Date,
      required: true
    },
    isAktif: {
      type: Boolean,
      required: true,
      default: true
    }
  },
  {
    collection: "peminjaman"
  }
);

module.exports = mongoose.model("Peminjaman", peminjamanSchema);
