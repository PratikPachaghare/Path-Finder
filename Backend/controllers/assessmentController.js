const Assessment = require('../models/Assessment');
const Question = require('../models/Question');
const { validationResult } = require('express-validator');

// @desc    Submit assessment responses
// @route   POST /api/assessment/submit
// @access  Private
exports.submitAssessment = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const { responses } = req.body;

    // Validate responses
    if (!responses || !Array.isArray(responses) || responses.length < 5) {
      return res.status(400).json({
        success: false,
        error: 'Please provide at least 5 assessment responses'
      });
    }

    // Create assessment
    const assessment = await Assessment.create({
      user: req.user.id,
      responses
    });

    res.status(201).json({
      success: true,
      data: assessment
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({
      success: false,
      error: 'Server Error'
    });
  }
};

// @desc    Get assessment results for a user
// @route   GET /api/assessment/results/:userId
// @access  Private
exports.getAssessmentResults = async (req, res) => {
  try {
    // Check if user is requesting their own assessment or is admin
    if (req.params.userId !== req.user.id) {
      return res.status(401).json({
        success: false,
        error: 'Not authorized to access this assessment'
      });
    }

    const assessments = await Assessment.find({ user: req.params.userId })
      .sort({ completedAt: -1 });

    res.status(200).json({
      success: true,
      count: assessments.length,
      data: assessments
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({
      success: false,
      error: 'Server Error'
    });
  }
};

// @desc    Get all assessment questions
// @route   GET /api/assessment/questions
// @access  Private
exports.getQuestions = async (req, res) => {
  try {
    const questions = await Question.find().sort({ order: 1 });

    res.status(200).json({
      success: true,
      count: questions.length,
      data: questions
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({
      success: false,
      error: 'Server Error'
    });
  }
};