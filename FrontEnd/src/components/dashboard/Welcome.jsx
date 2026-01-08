import React from 'react';
import { Compass } from 'lucide-react';
import ScrolingCard from '../Home/ScrolingCard';
import OurPatners from '../Home/OurPatners';
import OurClient from '../Home/OurClinet';
import background_animation from "../../Asset/imagesWeb/background_animation.png"; // Import background animation image
import "../Home/HeroSection.css"; // Include custom CSS for animation
import { useNavigate } from 'react-router-dom';
import Footer from '../CourseCom/Footer';
import StepImage from "../../Assete/setp_roadmap.jpg"
import Step_Pencial_Image from "../../Assete/setp_pencial_roadmap.png"
// import CourseVideoPage from '../CourseCom/VedioCard';

const Welcome = ({user}) => {
  const navigate = useNavigate();
  return (
    <>
      <div className="absolute inset-0 bg-animation z-0">
        <img src={background_animation} alt="" className="w-full" />
      </div>

      <div className="max-w-4xl mx-auto m-8 relative z-10">
        <div className="text-center space-y-6 mb-12 relative z-10">
          <div className="relative z-10 inline-flex items-center justify-center p-2 bg-blue-50 rounded-full mb-4">
            <Compass className="w-8 h-8 text-blue-600 {} relative z-10" />
          </div>
          <h1 className="relative z-10 text-4xl font-bold text-gray-800">
            Welcome, {user.name}!
          </h1>
          <p className="relative z-10 text-xl text-gray-600 max-w-2xl mx-auto">
            Let's help you discover your perfect career path. Start by taking our comprehensive assessment to get personalized recommendations.
          </p>
        </div>

        <div className="relative z-10 bg-white rounded-2xl shadow-lg overflow-hidden">
          <img
            src={Step_Pencial_Image}
            alt="Student thinking about career choices"
            className="w-full h-auto object-cover z-10"
          />
          <div className="p-8 relative z-10">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Ready to Begin Your Journey?</h2>
            <p className="text-gray-600 mb-6">
              Our assessment will help understand your interests, skills, and aspirations to guide you toward the most suitable engineering career path.
            </p>
            <button
      onClick={() => navigate("/assessment")} // Navigate to the Assessment page
      className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition duration-200"
    >
      Start Assessment
    </button>
          </div>
        </div>
      </div>

      <ScrolingCard />
      <OurPatners />
      <Footer/>
    </>
  );
};

export default Welcome;
