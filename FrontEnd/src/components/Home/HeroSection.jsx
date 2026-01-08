import React from "react";
import "./HeroSection.css"; // Include custom CSS for animation
import background_animation from "../../Asset/imagesWeb/background_animation.png"; // Import background animation image
import animati_image from "../../Asset/imagesWeb/animati_image.png"; // Import background animation image

const HeroSection = () => {
  return (
    <div className="relative bg-white  m-auto h-screen flex items-center justify-center overflow-hidden">
      
      <div className="absolute inset-0 bg-animation z-0"><img src={background_animation} alt="" className="w-full"/></div>
      <div className="relative z-10 container mx-auto flex flex-col lg:flex-row items-center justify-between px-6 lg:px-16">
        
        <div className="text-center lg:text-left max-w-xl">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4">
            CHOOSE THE PERFECT{" "}
            <span className="text-blue-500">WEBSITE DEVELOPMENT</span> PARTNER
            WITH CONFIDENCE
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            At Fascave, We Deliver Innovative Technology Solutions That Drive
            Business Growth. From Web And Mobile App Development To Cutting-Edge
            Data Analytics, We’re Your Trusted Partner In Digital
            Transformation. Let’s Bring Your Ideas To Life With Precision,
            Creativity, And Expertise.
          </p>
          <button className="bg-blue-950 text-white px-6 py-3 rounded-lg shadow-lg font-semibold hover:bg-blue-700">
            Book a Free Consultation
          </button>
        </div>

        {/* Illustration Section */}
        <div className="mt-8 lg:mt-0">
          <img
            src={animati_image} // Replace with actual illustration
            alt="Illustration"
            className="w-full max-w-md lg:max-w-lg "
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
