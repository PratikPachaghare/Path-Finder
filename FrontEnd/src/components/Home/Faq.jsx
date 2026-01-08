import React, { useState } from "react";
import { RiArrowDownSLine } from "react-icons/ri";
import { RiArrowUpSLine } from "react-icons/ri";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    "What services does Fascave IT Solutions provide?",
    "How can Fascave IT Solutions help with digital transformation?",
    "Do you provide customized website development?",
    "What technologies do you use for web and mobile app development?",
    "How does your SEO service work?",
    "Do you work with startups?",
    "What is your project development process?",
    "How much does it cost to develop a website or app?",
    "Do you offer support and maintenance after project completion?",
    "How can I get in touch with Fascave IT Solutions?",
  ];

  const Answer = [""];

  return (
    <div className="max-w-4xl mx-auto p-6 font-poppins">
      <h2 className="text-2xl font-bold text-center mb-4 text-purpleText">
        FREQUENTLY ASKED QUESTIONS
      </h2>
      <p className="text-center text-gray-600 mb-6">
        Our Frequently Asked Questions Are Designed To Provide Quick, Insightful
        Solutions To Your Queries.
      </p>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full text-left px-4 py-3 flex justify-between items-center bg-white"
            >
              <span className="font-medium">{`Q${index + 1}. ${faq}`}</span>
              <span className="text-xl text-purpleText font-bold">
                {activeIndex === index ? (
                  <RiArrowUpSLine />
                ) : (
                  <RiArrowDownSLine />
                )}
              </span>
            </button>
            {activeIndex === index && (
              <div className="px-4 py-3 bg-white text-gray-700 shadow-inner">
                <p>Answer to "{faq}" goes here.</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
