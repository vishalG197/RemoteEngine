const express = require('express');
const router = express.Router();
const authenticationMiddleware = require('../middlewares/authenticationMiddleware');
const skillController = require('../controllers/skillController');


// Middleware to protect routes requiring authentication
router.use(authenticationMiddleware);

// Route to get all skills
router.get('/', skillController.getAllSkills);

// Other skill-related routes can be added here

module.exports = router;
