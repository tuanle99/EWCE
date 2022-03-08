const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/ewce");

const collectorSeed = [
  {
    firstName: "collector_first",
    lastName: "collector_last",
    username: "first_last",
    password: "password",
    phone: "1234567890",
    address: "123 address",
  },
];

const seedCollector = async () => {
  db.Collector.remove({})
    .then(() => db.Collector.collection.insertMany(collectorSeed))
    .then((data) => {
      console.log("Collector records inserted!");
    })
    .catch((err) => {
      console.error(err);
    });
};

module.exports = seedCollector;
