const express = require('express');
const router = express.Router();
const authenticationMiddleware = require('../middlewares/authenticationMiddleware');
const onboardingController = require('../controllers/developerController');

/**
 * @swagger
 * tags:
 *   name: Developer
 *   description: Developer onboarding operations
 */

/**
 * @swagger
 * /developers/onboard:
 *   post:
 *     summary: Submit developer onboarding details
 *     tags: [Developer]
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Developer'
 *     responses:
 *       201:
 *         description: Onboarding details submitted successfully
 *         content:
 *           application/json:
 *             example:
 *               message: "Onboarding details submitted successfully"
 *       500:
 *         description: Internal Server Error
 *         content:
 *           application/json:
 *             example:
 *               message: "Internal server error"
 */

// Middleware to protect routes requiring authentication
router.use(authenticationMiddleware);

// Developer Onboarding Route
router.post('/onboard', onboardingController.submitOnboarding);

module.exports = router;
