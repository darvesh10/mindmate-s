// server/controllers/moodController.js

const Mood = require('../models/Mood');


exports.saveMood = async (req, res) => {
  try {
    const { mood } = req.body;

    const newMood = new Mood({
      userId: req.user.userId,
      mood,
      date: new Date()
    });

    await newMood.save();
    res.status(201).json({ message: 'Mood saved successfully', mood: newMood });
  } catch (error) {
    res.status(500).json({ message: 'Error saving mood' });
  }
};


exports.getMoods = async (req, res) => {
  try {
    const moods = await Mood.find({ userId: req.user.userId }).sort({ date: -1 });
    res.json(moods);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching moods' });
  }
};
