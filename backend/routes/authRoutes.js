const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const authenticationMiddleware = require('../middlewares/authenticationMiddleware');

// POST route for user registration
router.post('/register', authController.register);

// POST route for user login
router.post('/login', authController.login);

// Example of a protected route
router.get('/profile', authenticationMiddleware, authController.getProfile);

module.exports = router;
