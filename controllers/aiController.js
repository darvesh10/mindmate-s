
exports.analyzeJournals = async (req, res) => {
  try {
    const { entries } = req.body;

    if (!entries || !Array.isArray(entries)) {
      return res.status(400).json({ message: "Entries are required as an array" });
    }

    console.log("📩 Received Entries:", entries);

    // 🧠 Mood-based dummy suggestions
    const moodTips = {
      '😄 Happy': "Keep spreading your positivity! It’s contagious. 😊",
      '😌 Calm': "Maintain this calmness. Consider meditation or gratitude journaling.",
      '😐 Neutral': "Try something creative today to uplift your mood!",
      '😕 Confused': "Take a short break and revisit things with a fresh mind.",
      '😢 Sad': "Talk to a friend, express yourself—it helps. You're not alone. 💙",
      '😠 Angry': "Pause and take deep breaths. Try to write out your feelings calmly."
    };

    const suggestions = entries.map(entry => {
      return {
        text: entry.text,
        suggestion: moodTips[entry.mood] || "Take care of your mental health. You're doing your best. 🌿",
      };
    });

    res.json({ suggestions });
  } catch (error) {
    console.error("Dummy AI Error:", error);
    res.status(500).json({ message: "Failed to generate dummy suggestions" });
  }
};
