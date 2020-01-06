const Anggota = require("./anggotaModel");
const hash = require("../../lib/bcryptPassword");
const signJWT = require("../../lib/signJWT");

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
  },
  auth(req, res) {
    const { username, password } = req.body;
    Anggota.findOne({ username })
      .then(row => {
        _anggota = row;
        return hash.checkPassword(password, row.password);
      })
      .then(isMatch => {
        if (isMatch) {
          return signJWT.signJWT(_anggota);
        } else {
          res.json({
            isSuccess: false,
            error: "Password did not match"
          });
        }
      })
      .then(token => res.json({ isSuccess: true, token: token }))
      .catch(err => res.json(err));
  }
};
