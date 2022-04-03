const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const coordinatorSchema = new Schema({
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
  employee_collector: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Collector',
    },
  ],
});

const Coordinator = mongoose.model('Coordinator', coordinatorSchema);

module.exports = Coordinator;
