const Kategori = require("./kategoriModel");

module.exports = {
  index(req, res) {
    Kategori.find({})
      .then(rows => res.json(rows))
      .catch(err => res.json(err));
  },
  show(req, res) {
    Kategori.findOne({ _id: req.params.id })
      .then(row => res.json(row))
      .catch(err => res.json(err));
  },
  store(req, res) {
    Kategori.create({ ...req.body })
      .then(row => res.json(row))
      .catch(err => res.json(err));
  },
  update(req, res) {
    Kategori.findOneAndUpdate(
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
  destroy(req, res) {
    Kategori.findOneAndDelete({ _id: req.params.id })
      .then(row =>
        res.json({
          isSuccess: true,
          data: row
        })
      )
      .catch(err => res.json(err));
  }
};
