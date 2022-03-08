const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const consumerSchema = new Schema({
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
  reward_pts: { type: Number, require: true },
  current_bag: { type: Number },
  total_redeem: { type: Number, required: true },
});

const Consumer = mongoose.model("Consumer", consumerSchema);

module.exports = Consumer;
