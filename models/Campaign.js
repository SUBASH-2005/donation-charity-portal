const mongoose = require("mongoose");

const CampaignSchema = new mongoose.Schema({
  title: String,
  description: String,
  targetAmount: Number,
  collectedAmount: { type: Number, default: 0 }
});

module.exports = mongoose.model("Campaign", CampaignSchema);
