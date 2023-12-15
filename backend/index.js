// index.js

const express = require("express");
const connection = require("./db");
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const developerRoutes = require('./routes/developerRoutes');
const skillRoutes = require('./routes/skillRoutes');

require('dotenv').config();


const app = express();

app.use(cors());
app.use(express.json());
// Routes
app.use('/auth', authRoutes);
app.use('/developers', developerRoutes);
app.use('/skills', skillRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
   console.error(err.stack);
   res.status(500).send('Something went wrong!');
 });
 
app.get("/",(req,res)=>{
  console.log("server is running")
  res.send("server is running")
})
const PORT = process.env.PORT || 3001;
app.listen(PORT, async () => {
  try {
    await connection;
    console.log("Connected to the database");
    console.log("Server is running on port http://localhost:8000");
  } catch (error) {
    console.error(error);
  }
});
