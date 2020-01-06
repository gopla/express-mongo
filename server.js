const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");

require("./config/db");

const router = require("./config/routes");

app.use(express.json());
app.use(morgan("tiny"));
app.use(cors());
app.use(router);

app.listen(3030, () => {
  console.log("-> Listening at 3030");
});
