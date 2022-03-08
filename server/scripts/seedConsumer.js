const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/ewce");

const consumerSeed = [
  {
    firstName: "consumer_first",
    lastName: "consumer_last",
    username: "first_last",
    password: "password",
    phone: "1234567890",
    address: "123 address",
    reward_pts: 89,
    current_bag: 2,
    total_redeem: 1,
  },
];

const seedConsumer = async () => {
  await db.Consumer.remove({})
    .then(() => db.Consumer.collection.insertMany(consumerSeed))
    .then((data) => {
      console.log("Consumer records inserted!");
    })
    .catch((err) => {
      console.error(err);
    });
};

module.exports = seedConsumer;
