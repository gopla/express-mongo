const Peminjaman = require("./peminjamanModel");

module.exports = {
  index(req, res) {
    Peminjaman.find({})
      .populate("anggota")
      .populate("buku")
      .exec()
      .then(rows => res.json(rows))
      .catch(err => res.json(err));
  },
  show(req, res) {
    Peminjaman.findOne({ _id: req.params.id })
      .populate("anggota")
      .populate("buku")
      .exec()
      .then(row => res.json(row))
      .catch(err => res.json(err));
  },
  store(req, res) {
    Peminjaman.create({ ...req.body })
      .then(row => res.json(row))
      .catch(err => res.json(err));
  },
  update(req, res) {
    Peminjaman.findOneAndUpdate(
      { _id: req.params.id },
      { $set: req.body },
      { new: true }
    )
      .then(row =>
        res.json({
          isSuccess: true,
          data: row
        })
      )
      .catch(err => res.json(err));
  },
  delete(req, res) {
    Peminjaman.findOneAndDelete({ _id: req.params.id })
      .then(row =>
        res.json({
          isSuccess: true,
          data: row
        })
      )
      .catch(err => res.json(err));
  },
  ubahStatusPinjam(req, res) {
    Peminjaman.findOneAndUpdate(
      { _id: req.body.id },
      { isAktif: false },
      { new: true }
    )
      .then(row => res.json({ isSuccess: true, data: row }))
      .catch(err => res.json(err));
  },
  anggotaPinjam(req, res) {
    Peminjaman.find({ anggota: req.params.id_anggota })
      .populate("anggota")
      .populate("buku")
      .exec()
      .then(rows => res.json(rows))
      .catch(err => res.json(err));
  },
  anggotaPinjamFindOne(req, res) {
    Peminjaman.findOne({ anggota: req.params.id_anggota, _id: req.params.id })
      .populate("anggota")
      .populate("buku")
      .exec()
      .then(row => res.json(row))
      .catch(err => res.json(err));
  }
};
