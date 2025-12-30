const express = require("express");
const Campaign = require("../models/Campaign");

const router = express.Router();

// Add Campaign (Admin)
router.post("/", async (req, res) => {
  const campaign = new Campaign(req.body);
  await campaign.save();
  res.json(campaign);
});

// Get All Campaigns
router.get("/", async (req, res) => {
  const campaigns = await Campaign.find();
  res.json(campaigns);
});

module.exports = router;
