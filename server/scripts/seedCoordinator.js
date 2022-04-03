const mongoose = require('mongoose');
const db = require('../models');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/ewce');

const coordinatorSeed = [
  {
    firstName: 'coordinator_first',
    lastName: 'coordinator_last',
    username: 'coordinator_first_last',
    password: 'password',
    phone: '1234567890',
    address: '123 address',
  },
  {
    firstName: 'first_coordinator',
    middleName: 'middle',
    lastName: 'last_coordinator',
    username: 'first_last',
    password: 'last',
    phone: '0001112222',
    address: 'address 000',
    employee_collector: [],
  },
];

const seedCoordinator = async () => {
  db.Coordinator.remove({})
    .then(() => db.Coordinator.collection.insertMany(coordinatorSeed))
    .then((data) => {
      console.log('Coordinator records inserted!');
    })
    .catch((err) => {
      console.error(err);
    });
};

module.exports = seedCoordinator;
