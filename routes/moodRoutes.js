// server/routes/moodRoutes.js

const express = require('express');
const router = express.Router();
const { saveMood, getMoods } = require('../controllers/moodController');
const authMiddleware = require('../middleware/authMiddleware');

// Save mood (POST) & Get moods (GET)
router.post('/', authMiddleware, saveMood);
router.get('/', authMiddleware, getMoods);

module.exports = router;
