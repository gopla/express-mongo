const mongoose = require("mongoose");

const kategoriSchema = new mongoose.Schema(
  {
    nama: {
      type: String,
      required: true
    }
  },
  {
    collection: "kategori"
  }
);

module.exports = mongoose.model("Kategori", kategoriSchema);
