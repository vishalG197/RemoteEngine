// index.js

const express = require("express");
const connection = require("./db");
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const onboardingRoutes = require('./routes/onboardingRoutes');
require('dotenv').config();


const app = express();

app.use(cors());
app.use(express.json());
// Routes
app.use('/api', authRoutes);
app.use('/api', onboardingRoutes);
app.get("/",(req,res)=>{
  console.log("server is running")
  res.send("server is running")
})
app.listen(8080, async () => {
  try {
    await connection;
    console.log("Connected to the database");
    console.log("Server is running on port http://localhost:8000");
  } catch (error) {
    console.error(error);
  }
});
