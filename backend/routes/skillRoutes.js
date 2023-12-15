const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/authenticationMiddleware');
const skillController = require('../controllers/skillController');

// Route to get all skills
router.get('/', skillController.getAllSkills);

// Other skill-related routes can be added here

module.exports = router;
