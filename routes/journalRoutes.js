
const express = require('express');
const router = express.Router();
const { createJournal, getJournals, deleteJournal } = require('../controllers/journalController');
const authMiddleware = require('../middleware/authMiddleware');

// All journal routes are protected by auth middleware
router.post('/', authMiddleware, createJournal);
router.get('/', authMiddleware, getJournals);
router.delete('/:id', authMiddleware, deleteJournal);

module.exports = router;
