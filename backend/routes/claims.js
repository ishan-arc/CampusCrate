const express = require('express');
const router = express.Router();
const Claim = require('../models/claim');

// POST /claim - create a new claim
router.post('/', async (req, res) => {
  try {
    const claimData = req.body;
    const newClaim = new Claim(claimData);
    await newClaim.save();
    res.status(201).json(newClaim);
  } catch (error) {
    console.error('Error creating claim:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
