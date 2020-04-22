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

MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/workoutdb", { useNewUrlParser: true };
mongoose.connect(MONGODB_URI || "mongodb://<marcwithac>:<100Grovewood!>@ds033477.mlab.com:33477/heroku_khzqndml", 
);

// routes here

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});