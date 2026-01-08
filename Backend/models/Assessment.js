const mongoose = require('mongoose');

const AssessmentSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  responses: [
    {
      question: {
        type: String,
        required: true
      },
      answer: {
        type: String,
        required: true
      }
    }
  ],
  completedAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Assessment', AssessmentSchema);
