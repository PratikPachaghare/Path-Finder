import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from "react-router-dom";
import { AiOutlineRobot } from "react-icons/ai";
import { RiRobot2Fill } from "react-icons/ri";
import { BiBot } from "react-icons/bi";
import Sidebar from "./components/layout/Sidebar";
import Header from "./components/layout/Header";
import Welcome from "./components/dashboard/Welcome";
import AssessmentForm from "./components/assessment/AssessmentForm";
import RoadmapDashboard from "./components/roadmap/Roadmap_Dashbord";
import Consultant from "./components/consultant/consultant";
import AuthDashboard from "./components/auth/AuthDashboard";
import RoadmapView from "./components/roadmap/RoadmapView";
import ChatDashboard from "./components/chatbot/ChatBot";
import CourseApp from "./components/CourseCom/CourseApp";
import GenModelsAi from "./components/GenModels/GenModelsAi";
import ResumeBuilder from "./components/Resume/ResumeBuilder";
// import CourseVideoPage from "./components/CourseCom/VedioCard";

function ChatBotButton() {
  const navigate = useNavigate();
  return (
    <button
      className="fixed bottom-8 right-8 bg-blue-500 text-white p-4 rounded-full shadow-2xl hover:bg-orange-600 transition-all flex items-center justify-center border-2 border-white hover:shadow-2xl"
      onClick={() => navigate("/chatBot")}
    >
      <RiRobot2Fill size={40} className="drop-shadow-lg" />
    </button>
  );
}

function App() {
  const [user, setUser] = useState(null);
  const [response, setResponsess] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      setLoading(false);
      return;
    }

    const fetchUser = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/auth/me", {
          method: "GET",
          headers: { Authorization: `Bearer ${token}` },
        });

        const data = await response.json();

        if (data.success) {
          setUser(data.data);
        } else {
          localStorage.removeItem("token");
          setUser(null);
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
        localStorage.removeItem("token");
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen text-xl">
        Loading...
      </div>
    );
  }

  return (
    <Router>
      {user ? (
        <div className="w-full min-h-screen bg-gray-50">
          <Header user={user} onLogout={handleLogout} />
          <Sidebar />
          <main className="lg:ml-64 min-h-screen pt-4 pb-12">
            <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
              <Routes>
                <Route path="/" element={<Navigate to="/welcome" />} />
                <Route path="/welcome" element={<Welcome user={user} />} />
                <Route path="/assessment" element={<AssessmentForm setResponsess={setResponsess} user={user}/>} />
                <Route path="/roadmap" element={<RoadmapDashboard user={user} setResponsess={setResponsess}/>} />
                <Route path="/roadmapView" element={<RoadmapView careerData={response} />} />
                <Route path="/chatBot" element={<ChatDashboard user={user} />} />
                <Route path="/consultant" element={<Consultant user={user}/>} />
                <Route path="/courses" element={<CourseApp />} />
                <Route path="/predict" element={<GenModelsAi />} />
                <Route path="/Resume" element={<ResumeBuilder />} />
                
                {/* <Route path="/CourseVedio/:courseId" element={<CourseVideoPage />} /> */}
                <Route path="*" element={<Navigate to="/welcome" />} />
              </Routes>
            </div>
          </main>
          <ChatBotButton />
        </div>
      ) : (
        <Routes>
          <Route path="/" element={<AuthDashboard setUser={setUser} />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      )}
    </Router>
  );
}

export default App;
