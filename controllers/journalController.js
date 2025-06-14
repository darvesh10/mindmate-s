// server/controllers/journalController.js

const Journal = require('../models/Journal');


exports.createJournal = async (req, res) => {
  try {
    const { text, mood } = req.body;

    const newEntry = new Journal({
      userId: req.user.userId,
      text,
      mood,
      date: new Date()
    });

    await newEntry.save();
    res.status(201).json({ message: 'Journal saved successfully', journal: newEntry });
  } catch (error) {
    res.status(500).json({ message: 'Error saving journal' });
  }
};


exports.getJournals = async (req, res) => {
  try {
    const journals = await Journal.find({ userId: req.user.userId }).sort({ date: -1 });
    res.json(journals);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching journals' });
  }
};


exports.deleteJournal = async (req, res) => {
  try {
    const { id } = req.params;

    const journal = await Journal.findOneAndDelete({
      _id: id,
      userId: req.user.userId
    });

    if (!journal) return res.status(404).json({ message: 'Journal not found' });

    res.json({ message: 'Journal deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting journal' });
  }
};


