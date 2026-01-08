import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AlertCircle, Loader2 } from "lucide-react";
import {
  mandatoryQuestions,
  scienceTechnologyQuestions,
  businessManagementQuestions,
  artsHumanitiesQuestions,
  medicineHealthcareQuestions,
} from "./qution";
import Image1 from "../../Assete/image1.png";
import Image2 from "../../Assete/image2.png";
import Image3 from "../../Assete/image3.png";
import Image4 from "../../Assete/image4.png";
import Image5 from "../../Assete/image5.png";
import Image6 from "../../Assete/image6.png";

const IMAGE = [Image1, Image2, Image3, Image4, Image5, Image6];

const AssessmentForm = ({ setResponsess, user }) => {
  const [responses, setResponses] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [filteredQuestions, setFilteredQuestions] = useState(mandatoryQuestions);
  const [currentAdIndex, setCurrentAdIndex] = useState(0); // State to track ad image
  const navigate = useNavigate();

  // Change ad image every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAdIndex((prevIndex) => (prevIndex + 1) % IMAGE.length);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (responses.length === 2) {
      const selectedField = responses[1]?.answer;
      let additionalQuestions = [];

      switch (selectedField) {
        case "Science & Technology":
          additionalQuestions = scienceTechnologyQuestions;
          break;
        case "Business":
          additionalQuestions = businessManagementQuestions;
          break;
        case "Arts":
          additionalQuestions = artsHumanitiesQuestions;
          break;
        case "Medicine":
          additionalQuestions = medicineHealthcareQuestions;
          break;
        default:
          additionalQuestions = [];
      }

      if (additionalQuestions.length > 0) {
        setFilteredQuestions([...mandatoryQuestions, ...additionalQuestions]);
        setCurrentQuestionIndex(2);
      }
    }
  }, [responses]);

  const progressPercentage = ((currentQuestionIndex + 1) / filteredQuestions.length) * 100;

  const handleChange = (index, answer) => {
    setResponses((prevResponses) => {
      const updatedResponses = [...prevResponses];
      updatedResponses[index] = { question: filteredQuestions[index].text, answer };
      return updatedResponses;
    });
    setError("");
  };

  const handleNext = () => {
    if (!responses[currentQuestionIndex]?.answer) {
      setError("Please select an option before proceeding.");
      return;
    }
    setCurrentQuestionIndex((prev) => prev + 1);
  };

  const handlePrevious = () => {
    setCurrentQuestionIndex((prev) => prev - 1);
    setError("");
  };

  const handleSubmit = async () => {
    if (!responses[currentQuestionIndex]?.answer) {
      setError("Please select an option before submitting.");
      return;
    }
    setIsSubmitting(true);

    try {
      const response = await fetch("http://localhost:3000/api/generate/roadmap", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ responses, userId: user._id }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const responseData = await response.json();
      setResponsess(responseData);
      navigate("/roadmapView");
    } catch (error) {
      console.error("Error submitting assessment:", error);
      setError("Failed to submit assessment. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const isLastQuestion = currentQuestionIndex === filteredQuestions.length - 1;

  return (
    <div className="flex">
      <div className="flex max-w-5xl w-9/12 mx-auto mt-8 bg-white rounded-2xl shadow-lg p-8">
        <div className="flex-1 flex flex-col items-center">
          <h2 className="text-3xl font-bold text-gray-800">Career Assessment</h2>
          <h2 className="text-2xl font-bold text-blue-600">
            ({filteredQuestions[currentQuestionIndex].category})
          </h2>

          <div className="mt-4 w-full">
            <p className="text-center text-gray-600 mt-2">
              Question {currentQuestionIndex + 1} of {filteredQuestions.length}
            </p>
            <div className="w-full mt-3 bg-gray-300 h-2 rounded-full">
              <div className="bg-blue-600 h-2 rounded-full" style={{ width: `${progressPercentage}%` }}></div>
            </div>
          </div>

          {error && (
            <div className="mb-4 text-red-500 flex items-center">
              <AlertCircle className="w-5 h-5 mr-2" />
              {error}
            </div>
          )}

          <div className="my-6 w-full">
            <p className="text-lg font-medium text-gray-700 mb-4">{filteredQuestions[currentQuestionIndex].text}</p>
            <div className="grid grid-cols-2 gap-3">
              {filteredQuestions[currentQuestionIndex].options.map((option) => (
                <button
                  key={option}
                  onClick={() => handleChange(currentQuestionIndex, option)}
                  className={`p-4 rounded-lg border text-center w-full ${
                    responses[currentQuestionIndex]?.answer === option
                      ? "bg-blue-600 text-white border-blue-600"
                      : "border-gray-300 hover:border-blue-500"
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-8 flex justify-between w-full">
            {currentQuestionIndex > 0 && (
              <button
                onClick={handlePrevious}
                className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50"
              >
                Previous
              </button>
            )}

            {!isLastQuestion ? (
              <button
                onClick={handleNext}
                className="ml-auto px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                Next
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                className="ml-auto px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                {isSubmitting ? <Loader2 className="w-5 h-5 animate-spin" /> : "Submit Assessment"}
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Ad Section with Auto-Changing Image */}
      <div className="w-1/5 p-4 justify-end">
        <h3 className="text-xl font-bold text-center mb-3">GoogleAds</h3>
        <img
          src={IMAGE[currentAdIndex]} // Uses the current ad index
          alt="Advertisement"
          className="w-72 h-auto object-cover rounded-lg shadow-md transition-opacity duration-500"
        />
      </div>
    </div>
  );
};

export default AssessmentForm;
