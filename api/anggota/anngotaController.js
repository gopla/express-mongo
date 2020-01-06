const Anggota = require("./anggotaModel");
const hash = require("../../lib/bcryptPassword");

module.exports = {
  index(req, res) {
    Anggota.find({})
      .then(rows => res.json(rows))
      .catch(err => res.json(err));
  },
  show(req, res) {
    Anggota.findOne({ _id: req.params.id })
      .then(row => res.json(row))
      .catch(err => res.json(err));
  },
  store(req, res) {
    _anggota = req.body;
    hash.createHash(_anggota.password).then(hashedPassword => {
      _anggota.password = hashedPassword;
      Anggota.create({ ..._anggota })
        .then(row => res.json(row))
        .catch(err => res.json(err));
    });
  },
  update(req, res) {
    _anggota = req.body;
    hash.createHash(_anggota.password).then(hashedPassword => {
      _anggota.password = hashedPassword;
      Anggota.findOneAndUpdate(
        { _id: req.params.id },
        { $set: _anggota },
        { new: true }
      )
        .then(row =>
          res.json({
            isSuccess: true,
            data: row
          })
        )
        .catch(err => res.json(err));
    });
  },
  delete(req, res) {
    Anggota.findOneAndDelete({ _id: req.params.id })
      .then(row =>
        res.json({
          isSuccess: true,
          data: row
        })
      )
      .catch(err => res.json(err));
  }
};
