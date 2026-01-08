import React, { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import { PlayCircle, ThumbsUp, ThumbsDown, MessageCircle } from "lucide-react";

import Fullstack1 from '../../Assete/Video/Fullstack/01.mp4';
import Fullstack2 from '../../Assete/Video/Fullstack/02.mp4';
import Fullstack3 from '../../Assete/Video/Fullstack/03.mp4';
import Fullstack4 from '../../Assete/Video/Fullstack/04.mp4';
import Fullstack5 from '../../Assete/Video/Fullstack/05.mp4';

import AI1 from '../../Assete/Video/AI/01.mp4';
import AI2 from '../../Assete/Video/AI/02.mp4';
import AI3 from '../../Assete/Video/AI/03.mp4';
import AI4 from '../../Assete/Video/AI/04.mp4';

const topics = {
  Full_Stack_Web_Development: [
    { name: "Introduction", videoUrl: Fullstack1 },
    { name: "HTML", videoUrl: Fullstack2 },
    { name: "CSS", videoUrl: Fullstack3 },
    { name: "javaScript", videoUrl: Fullstack4 },
    { name: "React.js", videoUrl: Fullstack5 },
    { name: "Backend", videoUrl: Fullstack5 },
  ],
  Machine_Learning_Fundamentals: [
    { name: "Introduction", videoUrl: AI1 },
    { name: "AI Foundation", videoUrl: AI2 },
    { name: "Python", videoUrl: AI3 },
    { name: "Neural Networks", videoUrl: AI4 },
  ],
};

const CourseVideoPage = () => {
  const location = useLocation();
  const { courseId } = useParams();
  const courseName = location.state?.CourseName || courseId; 

  const courseTopics = topics[courseName] || [];

  const [selectedTopic, setSelectedTopic] = useState(null);
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  const [reviews, setReviews] = useState([]);
  const [reviewText, setReviewText] = useState("");

  // Set default video to the first topic when the course changes
  useEffect(() => {
    if (courseTopics.length > 0) {
      setSelectedTopic(courseTopics[0]); 
    }
  }, [courseTopics]);

  if (!courseTopics.length) {
    return <h2 className="text-center text-xl text-red-500">Course not found!</h2>;
  }

  const handleTopicClick = (topic) => {
    setSelectedTopic(topic); // Update video based on the clicked topic
  };

  const handleReviewSubmit = () => {
    if (reviewText.trim() !== "") {
      setReviews([...reviews, reviewText]);
      setReviewText("");
    }
  };

  return (
    <div className="flex h-screen w-full">
      {/* Sidebar */}
      <div className="w-1/4 bg-gray-100 p-4 border-r overflow-y-auto">
        <h2 className="text-lg font-bold mb-4 flex items-center">
          {courseName} Course Topics
        </h2>
        <ul>
          {courseTopics.map((topic) => (
            <li
              key={topic.name}
              className={`flex items-center cursor-pointer p-2 mb-2 rounded-md ${
                selectedTopic?.name === topic.name ? "bg-blue-500 text-white" : "bg-gray-200"
              }`}
              onClick={() => handleTopicClick(topic)}
            >
              <PlayCircle className="mr-2 text-blue-500" />
              {topic.name}
            </li>
          ))}
        </ul>
      </div>

      {/* Video Section */}
      <div className="flex-1 p-6">
        <h2 className="text-2xl font-bold mb-4">{courseName} - {selectedTopic?.name}</h2>
        <div className="w-full h-96 bg-black flex items-center justify-center text-white">
          {selectedTopic ? (
            <video key={selectedTopic.videoUrl} width="100%" height="100%" controls>
              <source src={selectedTopic.videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : (
            <p>No video selected</p>
          )}
        </div>

        {/* Like & Dislike Section */}
        <div className="mt-14 flex items-center space-x-6">
          <button
            className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-md"
            onClick={() => setLikes(likes + 1)}
          >
            <ThumbsUp className="mr-2" /> Like ({likes})
          </button>
          <button
            className="flex items-center px-4 py-2 bg-red-500 text-white rounded-md"
            onClick={() => setDislikes(dislikes + 1)}
          >
            <ThumbsDown className="mr-2" /> Dislike ({dislikes})
          </button>
        </div>

        {/* Review Section */}
        <div className="mt-6">
          <h3 className="text-lg font-bold mb-2 flex items-center">
            <MessageCircle className="mr-2" /> Reviews
          </h3>
          <textarea
            className="w-full p-2 border rounded-md"
            rows="3"
            placeholder="Write your review..."
            value={reviewText}
            onChange={(e) => setReviewText(e.target.value)}
          />
          <button
            className="mt-2 px-4 py-2 bg-green-500 text-white rounded-md"
            onClick={handleReviewSubmit}
          >
            Submit Review
          </button>

          {/* Display Reviews */}
          <div className="mt-4">
            {reviews.length === 0 ? (
              <p className="text-gray-500">No reviews yet.</p>
            ) : (
              <ul className="list-disc pl-5">
                {reviews.map((review, index) => (
                  <li key={index} className="bg-gray-100 p-2 rounded-md mb-2">
                    {review}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseVideoPage;
