// authenticationMiddleware.js

const jwt = require('jsonwebtoken');
const { secretKey } = require('../config'); // You may have a separate config file for secret keys

const authenticationMiddleware = (req, res, next) => {
  // Get the token from the request headers
  const token = req.header('Authorization');

  // Check if the token is present
  if (!token) {
    return res.status(401).json({ message: 'Unauthorized - No token provided' });
  }

  try {
    // Verify the token using the secret key
    const decoded = jwt.verify(token, secretKey);

    // Attach the user information to the request object
    req.user = decoded.user;

    // Proceed to the next middleware or route handler
    next();
  } catch (error) {
    // Handle token verification failure
    console.error('Token verification failed:', error.message);
    return res.status(401).json({ message: 'Unauthorized - Invalid token' });
  }
};

module.exports = authenticationMiddleware;
