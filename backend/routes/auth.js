const express = require('express');
const router = express.Router();
const { google } = require('google-auth-library');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const bcrypt = require('bcryptjs');

const CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const client = new google.auth.OAuth2(CLIENT_ID);

// POST /auth/google-login
router.post('/google-login', async (req, res) => {
  const { tokenId } = req.body;
  try {
    const ticket = await client.verifyIdToken({
      idToken: tokenId,
      audience: CLIENT_ID,
    });
    const payload = ticket.getPayload();
    const { email, name } = payload;

    let user = await User.findOne({ email });
    if (!user) {
      user = new User({ name, email, role: 'student' });
      await user.save();
    }
    if (user.blocked) {
      return res.status(403).json({ message: 'User is blocked' });
    }
    const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, {
      expiresIn: '7d',
    });
    res.json({ token, user: { id: user._id, name: user.name, email: user.email, role: user.role } });
  } catch (error) {
    console.error('Google login error:', error);
    res.status(401).json({ message: 'Invalid Google token' });
  }
});

module.exports = router;
