const jwt = require('jsonwebtoken');
require('dotenv').config();

const authenticationMiddleware = (req, res, next) => {
  // Get the token from the request headers
  const token = req.header('Authorization');

  // Check if the token is present
  if (!token) {
    return res.status(401).json({ message: 'Unauthorized - No token provided' });
  }

  try {
    // Verify the token using the secret key
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Attach the user information to the request object
    req.userId = decoded.userId;

    // Proceed to the next middleware or route handler
    next();
  } catch (error) {
    // Handle token verification failure
    console.error('Token verification failed:', error.message);
    return res.status(401).json({ message: 'Unauthorized - Invalid token' });
  }
};

module.exports = authenticationMiddleware;
