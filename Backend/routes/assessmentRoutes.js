const express = require('express');
const { 
  submitAssessment, 
  getAssessmentResults,
  getQuestions
} = require('../controllers/assessmentController');
const { protect } = require('../middleware/auth');
const { check } = require('express-validator');

const router = express.Router();

// All routes are protected
router.use(protect);

// Submit assessment
router.post(
  '/submit',
  [
    check('responses', 'Responses are required').isArray()
  ],
  submitAssessment
);

// Get assessment results
router.get('/results/:userId', getAssessmentResults);

// Get assessment questionss
router.get('/questions', getQuestions);

module.exports = router;