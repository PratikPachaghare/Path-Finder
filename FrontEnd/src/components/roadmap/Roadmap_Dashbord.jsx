import { PlusCircle, Trash2 } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // ✅ Import useNavigate

export default function RoadmapDashboard({ user, setResponsess }) {
  const [roadmaps, setRoadmaps] = useState([]);
  const [hoveredDelete, setHoveredDelete] = useState(null);
  const navigate = useNavigate(); // ✅ Initialize useNavigate

  const allRoadmap = async () => {
    try {
      let response = await fetch(`http://localhost:3000/api/career-paths/All/${user._id}`);

      if (!response.ok) {
        console.log("Failed to fetch data from backend.");
        return;
      }
      response = await response.json();
      setRoadmaps(response.data);
    } catch (error) {
      console.log("Error fetching roadmaps:", error);
    }
  };

  useEffect(() => {
    if (!user) {
      console.log("User is not defined.");
      return;
    }
    allRoadmap();
  }, []);

  const deleteRoadmap = async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/api/career-paths/delete/${id}`);

      if (!response.ok) {
        console.log("Failed to delete");
      }

      alert("Roadmap deleted successfully");
      allRoadmap();
    } catch (error) {
      console.log("Failed to delete roadmap:", error);
    }
  };

  const handleSelectRoadmap = (index) => {
    setResponsess(roadmaps[index]);
    navigate("/roadmapView");
  };

  return (
    <div className="p-6 flex flex-col items-center relative">
      {/* Floating "Create New Roadmap" Button (Top-Right) */}
      <button
        className="absolute top-6 right-6 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 flex items-center gap-2"
        onClick={() => navigate("/assessment")}
      >
        <PlusCircle className="w-6 h-6" /> Create Roadmap
      </button>

      {/* Title */}
      <h2 className="text-3xl font-bold text-gray-800 mb-8">📌 My Roadmaps</h2>

      {/* Roadmap Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl">
        {roadmaps.map((roadmap, index) => (
          <div
            key={index}
            onClick={() => handleSelectRoadmap(index)}
            className="relative p-8 bg-blue-100 hover:bg-green-200 shadow-lg rounded-2xl border border-gray-300 transform transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer"
          >
            {/* Delete Icon */}
            <div className="absolute top-4 right-4 flex flex-col items-center group">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  deleteRoadmap(roadmap._id);
                }}
                onMouseEnter={() => setHoveredDelete(roadmap._id)}
                onMouseLeave={() => setHoveredDelete(null)}
                className="text-gray-600 hover:text-red-500 transition-all duration-300"
              >
                <Trash2 className="w-6 h-6" />
              </button>
              {hoveredDelete === roadmap._id && (
                <span className="absolute -top-7 bg-black text-white text-xs px-2 py-1 rounded-lg opacity-90">
                  Delete permanently
                </span>
              )}
            </div>

            <h3 className="text-2xl font-semibold text-gray-800">{roadmap.title}</h3>
            <p className="text-md text-gray-600 mb-4">
              🗓️ Created on {new Date(roadmap.createdAt).toISOString().split("T")[0]}
            </p>

            <div className="bg-white p-5 rounded-lg shadow-sm">
              <h4 className="text-lg font-medium text-gray-700 mb-2">🚀 Roadmap Description:</h4>
              <p className="text-gray-800">{roadmap.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Existing "Create Roadmap" Button at Bottom */}
      <button
        className="mt-20 px-8 py-4 bg-blue-600 text-white text-xl font-semibold rounded-full shadow-lg hover:bg-blue-700 transform transition-all duration-300 hover:scale-110 flex items-center gap-3"
        onClick={() => navigate("/assessment")}
      >
        <PlusCircle className="w-8 h-8" /> Create New Roadmap
      </button>
    </div>
  );
}
