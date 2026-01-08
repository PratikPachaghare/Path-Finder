import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ClipboardCheck, AlertCircle, Loader2 } from "lucide-react";
import { getNextQuestions } from "./qutionMultiple";
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
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [questions, setQuestions] = useState(getNextQuestions([]));
  const navigate = useNavigate();

  useEffect(() => {
    setQuestions(getNextQuestions(responses));
  }, [responses]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % IMAGE.length);
    }, 9000);
    return () => clearInterval(interval);
  }, []);

  const handleNext = () => {
    if (!responses[currentQuestionIndex]?.answer) {
      setError("Please answer the question before proceeding.");
      return;
    }
    setCurrentQuestionIndex((prev) => prev + 1);
  };

  const handleAnswer = (answer) => {
    const currentQuestion = questions[currentQuestionIndex];
    setResponses((prev) => [...prev, { question: currentQuestion.text, answer }]);
    setError("");
  };

  const handleSubmit = async () => {
    if (!responses[currentQuestionIndex]?.answer) {
      setError("Please answer the question before submitting.");
      return;
    }
    setIsSubmitting(true);
    try {
      const response = await fetch("http://localhost:3000/api/generate/roadmap", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ responses, userId: user._id }),
      });
      const responseData = await response.json();
      setResponsess(responseData);
      navigate("/roadmapView");
    } catch (error) {
      setError("Failed to submit assessment. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <h2>Career Assessment</h2>
      {questions.length > currentQuestionIndex && (
        <div>
          <p>{questions[currentQuestionIndex].text}</p>
          {questions[currentQuestionIndex].options.map((option) => (
            <button key={option} onClick={() => handleAnswer(option)}>
              {option}
            </button>
          ))}
          <button onClick={handleNext}>Next</button>
        </div>
      )}
      {currentQuestionIndex >= questions.length && (
        <button onClick={handleSubmit}>{isSubmitting ? "Submitting..." : "Submit"}</button>
      )}
    </div>
  );
};

export default AssessmentForm;
