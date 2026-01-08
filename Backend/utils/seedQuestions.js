const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Question = require('../models/Question');
const connectDB = require('../config/db');

// Load environment variables
dotenv.config();

// Connect to database
connectDB();

// Sample assessment questions
const questions = [
  {
    text: 'What is your highest level of education?',
    category: 'education',
    options: [
      { text: 'High School', value: 'high_school' },
      { text: 'Associate Degree', value: 'associate' },
      { text: 'Bachelor\'s Degree', value: 'bachelors' },
      { text: 'Master\'s Degree', value: 'masters' },
      { text: 'PhD or Doctorate', value: 'doctorate' }
    ],
    order: 1
  },
  {
    text: 'What field of study are you most interested in?',
    category: 'interests',
    options: [
      { text: 'Computer Science', value: 'computer_science' },
      { text: 'Business', value: 'business' },
      { text: 'Arts and Design', value: 'arts_design' },
      { text: 'Engineering', value: 'engineering' },
      { text: 'Healthcare', value: 'healthcare' }
    ],
    order: 2
  },
  {
    text: 'Which of these skills are you strongest in?',
    category: 'skills',
    options: [
      { text: 'Problem Solving', value: 'problem_solving' },
      { text: 'Communication', value: 'communication' },
      { text: 'Creativity', value: 'creativity' },
      { text: 'Technical Skills', value: 'technical' },
      { text: 'Leadership', value: 'leadership' }
    ],
    order: 3
  },
  {
    text: 'What type of work environment do you prefer?',
    category: 'work_preferences',
    options: [
      { text: 'Remote Work', value: 'remote' },
      { text: 'Office Environment', value: 'office' },
      { text: 'Hybrid', value: 'hybrid' },
      { text: 'Flexible Hours', value: 'flexible' },
      { text: 'Structured Schedule', value: 'structured' }
    ],
    order: 4
  },
  {
    text: 'What do you enjoy doing in your free time?',
    category: 'interests',
    options: [
      { text: 'Coding/Programming', value: 'coding' },
      { text: 'Reading/Writing', value: 'reading_writing' },
      { text: 'Art/Design', value: 'art_design' },
      { text: 'Sports/Fitness', value: 'sports' },
      { text: 'Social Activities', value: 'social' }
    ],
    order: 5
  },
  {
    text: 'How do you prefer to solve problems?',
    category: 'personality',
    options: [
      { text: 'Analytical Approach', value: 'analytical' },
      { text: 'Creative Thinking', value: 'creative' },
      { text: 'Collaborative Discussion', value: 'collaborative' },
      { text: 'Research-Based', value: 'research' },
      { text: 'Intuitive Decision Making', value: 'intuitive' }
    ],
    order: 6
  },
  {
    text: 'What type of projects do you enjoy working on?',
    category: 'work_preferences',
    options: [
      { text: 'Technical Challenges', value: 'technical' },
      { text: 'Creative Projects', value: 'creative' },
      { text: 'People-Focused Work', value: 'people' },
      { text: 'Data Analysis', value: 'data' },
      { text: 'Strategic Planning', value: 'strategic' }
    ],
    order: 7
  },
  {
    text: 'What are your career goals in the next 5 years?',
    category: 'work_preferences',
    options: [
      { text: 'Technical Expertise', value: 'technical_expert' },
      { text: 'Management Position', value: 'management' },
      { text: 'Entrepreneurship', value: 'entrepreneur' },
      { text: 'Work-Life Balance', value: 'balance' },
      { text: 'Financial Growth', value: 'financial' }
    ],
    order: 8
  },
  {
    text: 'Which technologies are you most interested in?',
    category: 'interests',
    options: [
      { text: 'Web Development', value: 'web_dev' },
      { text: 'Mobile Apps', value: 'mobile' },
      { text: 'Data Science/AI', value: 'data_ai' },
      { text: 'Cloud Computing', value: 'cloud' },
      { text: 'Cybersecurity', value: 'security' }
    ],
    order: 9
  },
  {
    text: 'How do you prefer to learn new skills?',
    category: 'personality',
    options: [
      { text: 'Self-Study', value: 'self_study' },
      { text: 'Formal Education', value: 'formal' },
      { text: 'Hands-on Practice', value: 'hands_on' },
      { text: 'Mentorship', value: 'mentorship' },
      { text: 'Group Learning', value: 'group' }
    ],
    order: 10
  }
];

// Seed questions
const seedQuestions = async () => {
  try {
    // Clear existing questions
    await Question.deleteMany();
    
    // Insert new questions
    await Question.insertMany(questions);
    
    console.log('Questions seeded successfully');
    process.exit();
  } catch (error) {
    console.error(`Error seeding questions: ${error.message}`);
    process.exit(1);
  }
};

seedQuestions();