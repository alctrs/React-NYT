const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Articles collection and inserts the articles below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/nytreact"
);

const articleSeed = [
  {
    title: "New Edge",
    author: "Mayra Gamiddo ",
    summary:
      "Computer are awesome ",
    articleDate: new Date(Date.now())
  }
];

db.Article
  .remove({})
  .then(() => db.Article.collection.insertMany(articleSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
