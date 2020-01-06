const mongoose = require("mongoose");

const anggotaSchema = new mongoose.Schema(
  {
    nama: {
      type: String,
      required: true
    },
    username: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    role: {
      type: String,
      required: true,
      default: "Anggota"
    }
  },
  {
    collection: "anggota"
  }
);

module.exports = mongoose.model("Anggota", anggotaSchema);
