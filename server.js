const express = require("express");

const cors = require("cors");

const dotenv = require("dotenv");

const connectDB = require("./config/db");

const authRoutes = require("./routes/authRoutes");

const journalRoutes = require("./routes/journalRoutes");

const moodRoutes = require("./routes/moodRoutes");

const aiRoutes = require("./routes/aiRoutes");

dotenv.config();

connectDB();

const app = express();

app.use(cors({ 
  origin: ['http://localhost:5173', 'https://mindmate-client.vercel.app'], 
  methods: ['GET', 'POST', 'PUT', 'DELETE'], 
  
})) 


// Express parses incoming JSON
app.use(express.json());

// API routes
app.use('/api/auth', authRoutes);
app.use('/api/journals', journalRoutes);
app.use('/api/mood', moodRoutes);
app.use('/api/ai', aiRoutes)

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
