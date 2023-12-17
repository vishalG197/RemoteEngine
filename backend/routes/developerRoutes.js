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
 * components:
 *   schemas:
 *     Developer:
 *       type: object
 *       properties:
 *         firstName:
 *           type: string
 *         lastName:
 *           type: string
 *         email:
 *           type: string
 *         phoneNumber:
 *           type: string
 *         skills:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/Skill'
 *         experience:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/ProfessionalExperience'
 *         education:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/Education'
 *       required:
 *         - firstName
 *         - lastName
 *         - email
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

module.exports = router;

// Middleware to protect routes requiring authentication
router.use(authenticationMiddleware);

// Developer Onboarding Route
router.post('/onboard', onboardingController.submitOnboarding);

module.exports = router;
