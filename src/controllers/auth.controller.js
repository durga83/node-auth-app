const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/user.model');

exports.register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const userExists = await User.findByEmail(email);
    if (userExists) return res.status(400).json({ message: 'Email already registered' });

    const user = await User.create(name, email, password);
    res.status(201).json({ message: 'User registered', user });
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findByEmail(email);
    if (!user) return res.status(400).json({ message: 'Invalid credentials' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

    const token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error });
  }
};
