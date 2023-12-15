const jwt = require('jsonwebtoken');
const { promisify } = require('util');

const generateToken = (payload) => {
  // Generate a JWT token with a secret key
  const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });
  return token;
};

const verifyToken = async (token) => {
  // Verify the JWT token using the secret key
  try {
    const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);
    return decoded;
  } catch (error) {
    throw new Error('Invalid token');
  }
};

const extractUserIdFromToken = (token) => {
  // Extract user ID from the decoded token
  const decoded = jwt.decode(token);
  return decoded ? decoded.userId : null;
};

module.exports = {
  generateToken,
  verifyToken,
  extractUserIdFromToken,
};
