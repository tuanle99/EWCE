const mongoose = require('mongoose');
const db = require('../models');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/ewce');

const consumerSeed = [
  {
    firstName: 'consumer_first',
    lastName: 'consumer_last',
    username: 'first_last',
    password: 'password',
    phone: '1234567890',
    address: '123 address',
    reward_pts: 89,
    current_bag: 2,
    total_redeem: 1,
  },
  {
    firstName: 'test_consumer',
    middleName: 'middle_consumer',
    lastName: 'last_consumer',
    username: 'consumer123',
    password: 'password',
    phone: '1231231230',
    address: '456 address',
    reward_pts: 55,
    current_bag: 0,
    total_redeem: 0,
  },
];

const seedConsumer = async () => {
  await db.Consumer.remove({})
    .then(() => db.Consumer.collection.insertMany(consumerSeed))
    .then((data) => {
      console.log('Consumer records inserted!');
    })
    .catch((err) => {
      console.error(err);
    });
};

module.exports = seedConsumer;
