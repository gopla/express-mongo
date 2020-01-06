const mongoose = require("mongoose");

const bukuSchema = new mongoose.Schema(
  {
    kategori: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Kategori"
    },
    judul: {
      type: String,
      required: true
    },
    pengarang: {
      type: String,
      required: true
    },
    harga: {
      type: Number,
      required: true
    }
  },
  {
    collection: "buku"
  }
);

module.exports = mongoose.model("Buku", bukuSchema);
