import React from 'react';

export default function WhyChooseUs() {
  return (
    <div className="bg-white w-3/4 m-auto py-16">
      {/* Section Title */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-blue-950 mb-4">WHY CHOOSE US</h2>
        <p className="w-2/3 m-auto text-center text-xl text-gray-600  mb-8">
          Choose Us For Tailored IT Solutions That Drive Success, With Expert Professionals Dedicated To Your Business Growth.
        </p>
      </div>s

      
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6 px-8">
       
        <div className="flex flex-col items-center bg-white shadow-md rounded-lg p-6">
          <h3 className="text-3xl font-bold text-blue-400 mb-2">6+</h3>
          <p className="text-gray-600 text-sm">Years Experience</p>
        </div>

        
        <div className="flex flex-col items-center bg-white shadow-md rounded-lg p-6">
          <h3 className="text-3xl font-bold text-purple-500 mb-2">400+</h3>
          <p className="text-gray-600 text-sm">Projects Done</p>
        </div>

        
        <div className="flex flex-col items-center bg-white shadow-md rounded-lg p-6">
          <h3 className="text-3xl font-bold text-pink-500 mb-2">24/7</h3>
          <p className="text-gray-600 text-sm">Team Support</p>
        </div>

        
        <div className="flex flex-col items-center bg-white shadow-md rounded-lg p-6">
          <h3 className="text-3xl font-bold text-blue-400 mb-2">10+</h3>
          <p className="text-gray-600 text-sm">Industry Awards</p>
        </div>

        
        <div className="flex flex-col items-center bg-white shadow-md rounded-lg p-6">
          <h3 className="text-3xl font-bold text-yellow-500 mb-2">15+</h3>
          <p className="text-gray-600 text-sm">Core Professionals</p>
        </div>
      </div>
    </div>
  );
}
