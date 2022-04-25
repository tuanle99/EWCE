const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const binSchema = new Schema({
  bin_number: { type: Number, required: true },
  location: { type: String, required: true },
  last_collected: { type: Date },
  status: { type: String, required: true },
  assign_to: { type: mongoose.Schema.Types.ObjectId, ref: 'Collector' },
  type: { type: String, required: true },
  total_amount: { type: Number, required: true },
  collection_history: [
    {
      amount: {type: Number},
      date: {type: Date}
    }
  ]
});

const Bin = mongoose.model('Bin', binSchema);

module.exports = Bin;
