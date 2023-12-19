const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const authenticationMiddleware = require('../middlewares/authenticationMiddleware');

/**
 * @swagger
 * tags:
 *   name: Authentication
 *   description: User authentication operations
 */

/**
 * @swagger
 * /auth/register:
 *   post:
 *     summary: Register a new user
 *     tags: [Authentication]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       201:
 *         description: User registered successfully
 *         content:
 *           application/json:
 *             example:
 *               token: "your_jwt_token"
 *               userId: "user_id"
 *       400:
 *         description: Bad request
 *         content:
 *           application/json:
 *             example:
 *               errors: [{msg: "Validation error", param: "parameter_name"}]
 */

/**
 * @swagger
 * /auth/login:
 *   post:
 *     summary: Authenticate and log in a user
 *     tags: [Authentication]
 *     requestBody:
 *       required: true
 *
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       200:
 *         description: User logged in successfully
 *         content:
 *           application/json:
 *             example:
 *               token: "your_jwt_token"
 *               userId: "user_id"
 *       400:
 *         description: Bad request
 *         content:
 *           application/json:
 *             example:
 *               errors: [{msg: "Validation error", param: "parameter_name"}]
 *       401:
 *         description: Unauthorized
 *         content:
 *           application/json:
 *             example:
 *               message: "Invalid credentials"
 */

/**
 * @swagger
 * /auth/profile:
 *   get:
 *     summary: Get user profile (protected route)
 *     tags: [Authentication]
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         description: User profile retrieved successfully
 *         content:
 *           application/json:
 *             example:
 *               userId: "user_id"
 *               email: "user@example.com"
 *               firstName: "John"
 *       401:
 *         description: Unauthorized
 *         content:
 *           application/json:
 *             example:
 *               message: "Unauthorized"
 *       403:
 *         description: Forbidden
 *         content:
 *           application/json:
 *             example:
 *               message: "Forbidden"
 */

router.post('/register', authController.signup);
router.post('/login', authController.login);
router.get('/profile', authenticationMiddleware, authController.getProfile);

module.exports = router;
