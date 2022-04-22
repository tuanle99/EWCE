const mongoose = require('mongoose');
const db = require('../models');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/ewce');

const binSeed = [
  {
    bin_number: 1,
    location: 'location 1',
    last_collected: new Date('2022-03-07'),
    status: 'Empty',
    type: 'plastic',
    total_amount: 20,
  },
  {
    bin_number: 2,
    location: 'location 2',
    last_collected: new Date('2022-04-02'),
    status: 'Full',
    type: 'Diaper',
    total_amount: 30,
  },
  {
    bin_number: 3,
    location: 'location 3',
    last_collected: new Date('2022-04-03'),
    status: 'Full',
    type: 'Metal',
    total_amount: 100,
  },
];

const seedBin = async () => {
  db.Bin.remove({})
    .then(() => db.Bin.collection.insertMany(binSeed))
    .then((data) => {
      console.log('Bin records inserted!');
    })
    .catch((err) => {
      console.error(err);
    });
};
module.exports = seedBin;
