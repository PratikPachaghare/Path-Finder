import mongoose from "mongoose";

const CareerPathSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, // Made optional to match data
  title: { type: String, required: true },
  description: { type: String, required: true },

  foundation: {
    core_subjects: [String], 
    essential_knowledge: [String], 
  },

  skills: {
    technical: [String],
    soft: [String],
  },

  tools_technologies: [String],

  job_roles: [
    {
      title: { type: String, required: true },
      description: { type: String, required: true },
      requirements: [String],
    },
  ],

  career_growth: {
    year1: {
      title: { type: String, required: true },
      responsibilities: [String],
      salary_range: { type: String, required: true },
    },
    year2: {
      title: { type: String, required: true },
      responsibilities: [String],
      salary_range: { type: String, required: true },
    },
    year3: {
      title: { type: String, required: true },
      responsibilities: [String],
      salary_range: { type: String, required: true },
    },
    year5: {
      title: { type: String, required: true },
      responsibilities: [String],
      salary_range: { type: String, required: true },
    },
  },

  industries: [String],
  top_companies: [String],

  job_market_trends: {
    growth_rate: { type: String, required: true },
    demand: { type: String, required: true },
    future_scope: { type: String, required: true },
  },

  recommended_courses: [
    {
      name: { type: String, required: true },
      platform: { type: String, required: true },
      url: { type: String, required: true },
      youtube: { type: String },
      duration: { type: String },
      difficulty: { type: String },
    },
  ],

  certifications: [String],

  freelancing_opportunities: [
    {
      platform: { type: String, required: true },
      top_skills: [String],
      earning_potential: { type: String }, // Changed from "earningPotential" to "earning_potential"
    },
  ],

  additional_resources: {
    books: [String],
    communities: [String],
    events: [String],
  },
  CurrentWorld_and_Future_World_Requrment: {
    current_trends: {
      essential_skills: [String],
      industry_demand: { type: String },
      top_companies_hiring: [String],
      required_certifications: [String],
    },
    future_requirements: {
      emerging_skills: [String],
      predicted_growth: { type: String },
      future_industries: [String],
      recommended_future_courses: [String],
    }
  },

  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("CareerPath", CareerPathSchema);
