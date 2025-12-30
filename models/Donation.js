const mongoose = require("mongoose");

const DonationSchema = new mongoose.Schema({
  user: String,
  campaign: String,
  amount: Number,
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Donation", DonationSchema);
