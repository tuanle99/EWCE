const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/ewce");

const binSeed = [
  {
    bin_number: 1,
    location: "location 1",
    last_collected: new Date("2022-03-07"),
    status: "Empty",
    type: "plastic",
    total_amount: 20,
  },
];

const seedBin = async () => {
  db.Bin.remove({})
    .then(() => db.Bin.collection.insertMany(binSeed))
    .then((data) => {
      console.log("Bin records inserted!");
    })
    .catch((err) => {
      console.error(err);
    });
};
module.exports = seedBin;
