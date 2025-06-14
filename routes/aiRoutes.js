const express = require('express');
const router = express.Router();
const { analyzeJournals } = require('../controllers/aiController');  
const authMiddleware = require('../middleware/authMiddleware');

//  Protect the route
router.post('/insights', authMiddleware, analyzeJournals); 

module.exports = router;

