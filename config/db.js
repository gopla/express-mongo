const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://gopla:zaq123@cluster0-nj4a3.gcp.mongodb.net/perpustakaan",
    {
      useNewUrlParser: true
    }
  )
  .then(() => {
    console.log("-> Database Connected");
  })
  .catch(err => {
    console.log(err);
  });
