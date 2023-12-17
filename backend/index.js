const express = require("express");
const connection = require("./db");
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const developerRoutes = require('./routes/developerRoutes');
const skillRoutes = require('./routes/skillRoutes');
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

// Define Swagger options
const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Developer Onboarding App API',
      version: '1.0.0',
      description: 'API documentation for Developer Onboarding App',
    },
  },
  // Use a wildcard to include all route files
  apis: ['./routes/*.js'],
};

// Initialize Swagger
const swaggerSpec = swaggerJsdoc(swaggerOptions);

// Serve Swagger documentation at /api-docs
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Routes
app.use('/auth', authRoutes);
app.use('/developers', developerRoutes);
app.use('/skills', skillRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

app.get("/", (req, res) => {
  const htmlResponse = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Remote Engine</title>
    </head>
    <body>
      <h1>Welcome to Developer Onboarding App!</h1>
      <p>Elevate Your Code, Empower Your Skills: Developer Lift – Where Innovation Meets Expertise!</p>
    </body>
    </html>
  `;
  res.send(htmlResponse);
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, async () => {
  try {
    await connection;
    console.log("Connected to the database");
    console.log(`Server is running on http://localhost:${PORT}`);
    console.log(`Swagger documentation is available at http://localhost:${PORT}/api-docs`);
  } catch (error) {
    console.error(error);
  }
});
