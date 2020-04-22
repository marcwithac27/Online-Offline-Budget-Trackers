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

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/bugetTracker", { useNewUrlParser: true };
mongoose.connect(MONGODB_URI || "mongodb://<marcwithac>:<100Grovewood!>@ds033477.mlab.com:33477/heroku_khzqndml", 
);

// routes here
app.use(require("./routes/api"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});