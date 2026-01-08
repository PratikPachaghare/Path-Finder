import { Book, Wrench, Star, Rocket, Users, Lightbulb, Briefcase } from "lucide-react";

export const initialQuestions = [
  {
    category: "Education",
    id: "education_level",
    text: "What is your highest level of education?",
    options: ["High School", "Bachelor's Degree", "Master's Degree", "PhD or higher", "Self-Taught"],
    icon: Book,
  },
  {
    category: "Education", 
    id: "subject_interest",
    text: "Which subjects interest you the most?",
    options: ["Science & Technology", "Arts & Humanities", "Business & Management"],
    icon: Book,
  }
];

export const bachelorsQuestions = [
  {
    category: "Bachelor's Track",
    id: "bachelor_focus",
    text: "Which field do you want to specialize in during your Bachelor's?",
    options: ["Computer Science", "Engineering", "Business", "Psychology", "Medicine"],
    icon: Star,
  },
  {
    category: "Bachelor's Track",
    id: "bachelor_future_plan", 
    text: "What are your plans after completing your Bachelor's?",
    options: ["Pursue Master's", "Get a Job", "Start a Business", "Freelancing", "Undecided"],
    icon: Briefcase,
  }
];

export const mastersQuestions = [
  {
    category: "Master's Track",
    id: "master_specialization",
    text: "Which field do you want to specialize in during your Master's?",
    options: ["AI & Machine Learning", "Finance", "Data Science", "Healthcare Management", "Marketing"],
    icon: Rocket,
  },
  {
    category: "Master's Track",
    id: "master_goal",
    text: "What is your primary goal with a Master's degree?",
    options: ["Advance in Career", "Research & Innovation", "Higher Salary", "Start a Business", "Personal Growth"],
    icon: Lightbulb,
  }
];

export const scienceQuestions = [
  {
    category: "Science & Tech",
    id: "science_fav_field",
    text: "Which science & technology field excites you the most?",
    options: ["Artificial Intelligence", "Cybersecurity", "Renewable Energy", "Biotechnology", "Space Exploration"],
    icon: Wrench,
  },
  {
    category: "Science & Tech",
    id: "science_learning_method",
    text: "How do you prefer learning technical skills?",
    options: ["Online Courses", "University Lectures", "Self-Projects", "Bootcamps", "Internships"],
    icon: Users,
  }
];

export const artsQuestions = [
  {
    category: "Arts & Humanities",
    id: "arts_interest",
    text: "Which area of arts interests you the most?",
    options: ["Fine Arts", "Music", "Literature", "Philosophy", "Theatre"],
    icon: Star,
  },
  {
    category: "Arts & Humanities",
    id: "arts_career_plan",
    text: "What is your career plan in Arts & Humanities?",
    options: ["Teaching", "Writing & Journalism", "Artistry", "Academia", "Museum & Culture Work"],
    icon: Lightbulb,
  }
];

export const businessQuestions = [
  {
    category: "Business & Management",
    id: "business_field",
    text: "Which field of business interests you the most?",
    options: ["Entrepreneurship", "Finance", "Marketing", "Operations Management", "Human Resources"],
    icon: Briefcase,
  },
  {
    category: "Business & Management",
    id: "business_startup_interest",
    text: "Are you interested in starting your own business?",
    options: ["Yes, definitely", "Maybe later", "No, prefer working for a company", "Not sure yet"],
    icon: Rocket,
  }
];

export function getNextQuestions(responses) {
  if (responses.length < 2) {
    return initialQuestions;
  }
  const educationLevel = responses[0]?.answer;
  const subjectInterest = responses[1]?.answer;
  let educationQuestions = [];
  if (educationLevel === "Bachelor's Degree") {
    educationQuestions = bachelorsQuestions;
  } else if (educationLevel === "Master's Degree") {
    educationQuestions = mastersQuestions;
  }
  let subjectQuestions = [];
  if (subjectInterest === "Science & Technology") {
    subjectQuestions = scienceQuestions;
  } else if (subjectInterest === "Arts & Humanities") {
    subjectQuestions = artsQuestions;
  } else if (subjectInterest === "Business & Management") {
    subjectQuestions = businessQuestions;
  }
  return [...initialQuestions, ...educationQuestions, ...subjectQuestions];
}
