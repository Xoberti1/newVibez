const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/vibez"
);

const userSeed = [
  {
    username: "xoberti",
    password: "catinthehat",
    email: "xoberti@gmail.com",
    zipCode: 77077,
    name: "Xavier Oberti",
  },
  {
    username: "bhoang",
    password: "greeneggsandham",
    email: "bhoang@gmail.com",
    zipCode: 77098,
    name: "Brandon Hoang",
  },
  {
    username: "vmontemayor",
    password: "thelorax",
    email: "vik@gmail.com",
    zipCode: 77008,
    name: "Victor Montemayor",
  },
  {
    username: "atrevino",
    password: "foxinsox",
    email: "ladskjf@gmail.com",
    zipCode: 77098,
    name: "Adrian Trevino",
  },
  {
    username: "ihatfield",
    password: "hoponpop",
    email: "dasf@gmail.com",
    zipCode: 77890,
    name: "Isla Hatfield",
  }
];

db.User
  .remove({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.insertedCount, " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
