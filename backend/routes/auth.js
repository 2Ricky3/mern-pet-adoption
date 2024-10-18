const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const router = express.Router();

router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (user && await bcrypt.compare(password, user.password)) {
      const token = jwt.sign({ userId: user._id }, 'secretKey', { expiresIn: '1h' });
      res.json({ token });
    } else {
      res.status(400).json('Invalid credentials');
    }
  });
  
  router.post('/signup', async (req, res) => {
    const { username, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ username, password: hashedPassword });
    await newUser.save();
    const token = jwt.sign({ userId: newUser._id }, 'secretKey', { expiresIn: '1h' });
    res.status(201).json({ token });
  });
  

module.exports = router;
