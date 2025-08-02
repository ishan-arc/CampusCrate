const express = require('express');
const router = express.Router();

// POST /report - report abuse
router.post('/', async (req, res) => {
  try {
    const { reportedBy, itemId, reason, message } = req.body;
    // For simplicity, just log the report. In real app, save to DB and notify admin.
    console.log('Abuse report received:', { reportedBy, itemId, reason, message });
    res.status(201).json({ message: 'Report received. Thank you for your feedback.' });
  } catch (error) {
    console.error('Error reporting abuse:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
