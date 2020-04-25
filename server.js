const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const compression = require("compression");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(logger("dev"));

app.use(compression());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "momongodb://marcwithac:100Grovewood!@ds033477.mlab.com:33477/heroku_khzqndmlngodb://localhost/budget", 
{
  useMongoClient: true
});

// routes here
app.use(require("./routes/api"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});