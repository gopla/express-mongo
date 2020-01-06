const Buku = require("./bukuModel");

module.exports = {
  index(req, res) {
    Buku.find({})
      .populate("kategori")
      .exec()
      .then(rows => {
        res.json(rows);
      })
      .catch(err => {
        console.log(err);
      });
  },
  show(req, res) {
    Buku.findOne({ _id: req.params.id })
      .populate("kategori")
      .exec()
      .then(row => {
        res.json(row);
      })
      .catch(err => {
        console.log(err);
      });
  },
  store(req, res) {
    Buku.create(req.body)
      .then(row => {
        res.json(row);
      })
      .catch(err => {
        console.log(err);
      });
  },
  update(req, res) {
    Buku.findOneAndUpdate(
      { _id: req.params.id },
      { $set: req.body },
      { new: true }
    )
      .then(row => {
        res.json({
          isSuccess: true,
          data: row
        });
      })
      .catch(err => {
        console.log(err);
      });
  },
  delete(req, res) {
    Buku.findOneAndDelete({ _id: req.params.id }).then(row => {
      res.json({
        isSuccess: true,
        data: row
      });
    });
  }
};
