const mongoose = require('mongoose');
const JournalSchema = new mongoose.Schema({
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    mood: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      default: Date.now,
    },
  }, { timestamps: true });
  
  module.exports = mongoose.model('Journal', JournalSchema);