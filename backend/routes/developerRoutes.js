const express = require('express');
const router = express.Router();
const authenticationMiddleware = require('../middlewares/authenticationMiddleware');
const onboardingController = require('../controllers/developerController');

// Middleware to protect routes requiring authentication
router.use(authenticationMiddleware);

// Developer Onboarding Route
router.post('/onboard', onboardingController.submitOnboarding);

module.exports = router;
