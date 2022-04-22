const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const collectorSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  middleName: { type: String },
  lastName: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: { type: String, required: true },
  phone: {
    type: String,
    match: /^(\()?\d{3}(\))?()?\d{3}()\d{4}$/,
  },
  address: { type: String },
  bin_assign: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Bin' }],
});

const Collector = mongoose.model('Collector', collectorSchema);

module.exports = Collector;
