const mongoose = require('mongoose');

const OptionSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true
  },
  value: {
    type: String,
    required: true
  }
});

const QuestionSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true,
    enum: ['education', 'skills', 'interests', 'personality', 'work_preferences']
  },
  options: [OptionSchema],
  order: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model('Question', QuestionSchema);