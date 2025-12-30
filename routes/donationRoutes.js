const express = require("express");
const Donation = require("../models/Donation");
const Campaign = require("../models/Campaign");

const router = express.Router();

/* -------------------------------------------
   POST: Make a Donation
   URL: /api/donations
-------------------------------------------- */
router.post("/", async (req, res) => {
  try {
    const { user, campaign, amount } = req.body;

    // Validate input
    if (!user || !campaign || !amount) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Save donation
    const donation = new Donation({
      user,
      campaign,
      amount
    });
    await donation.save();

    // Update campaign total
    await Campaign.findOneAndUpdate(
      { title: campaign },
      { $inc: { collectedAmount: amount } }
    );

    res.json({ message: "Donation Successful" });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
});

/* -------------------------------------------
   GET: Get All Donations (Admin View)
   URL: /api/donations
-------------------------------------------- */
router.get("/", async (req, res) => {
  try {
    const donations = await Donation.find().sort({ date: -1 });
    res.json(donations);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
});

module.exports = router;
