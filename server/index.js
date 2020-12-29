const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");

const PORT = 3000;

var app = express();

app.use(bodyParser.json());

app.use(morgan("tiny"));
app.use(bodyParser.json());

app.use(require("./routes/products"));

const server = app.listen(PORT, () => {
  console.info("Listening on port " + server.address().port);
});
