const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { validationResult } = require('express-validator');
const User = require('../models/User'); // Assuming you have a User model
require("dotenv").config();
const saltRounds = 10;


const signup = async (req, res) => {
  try {
    // Validate request body
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User with this email already exists' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // Create a new user
    const newUser = new User({
      ...req.body,
      email,
      password: hashedPassword,
    });

    // Save the user to the database
    await newUser.save();

    // Create and return a JWT token
    const token = jwt.sign({ userId: newUser._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.status(201).json({ token, userId: newUser._id });
  } catch (error) {
    console.error('Error during signup:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

const login = async (req, res) => {
  try {
    // Validate request body
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    // Check if the user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Compare the provided password with the hashed password
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Create and return a JWT token
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.status(200).json({ token, userId: user._id });
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};
const getProfile = async (req, res) => {
  try {
    // Get user ID from the request object (assuming it's set during authentication middleware)
    const userId = req.userId;

    // Fetch the user from the database
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // You can customize the data you want to send in the profile response
    const userProfile = {
      userId: user._id,
      email: user.email,
      firstName:user.firstName
    };

    res.status(200).json(userProfile);
  } catch (error) {
    console.error('Error getting user profile:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

module.exports = {
  signup,
  login,
  getProfile
};
