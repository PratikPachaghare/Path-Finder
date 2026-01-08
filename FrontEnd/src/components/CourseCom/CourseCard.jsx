import React from 'react';
import { Star } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const CourseCard = ({ course }) => {
  return (
<NavLink to={`/CourseVedio/${course.courseId}`} target="_blank" state={{ CourseName: course.courseId }}> 
   <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:shadow-xl hover:-translate-y-1">
      <div className="h-48 overflow-hidden">
        <img 
          src={course.image} 
          alt={course.title} 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-xs font-semibold px-2 py-1 bg-blue-100 text-blue-800 rounded-full">
            {course.category}
          </span>
          <span className={`text-xs font-semibold px-2 py-1 rounded-full ${
            course.level === 'Beginner' 
              ? 'bg-green-100 text-green-800' 
              : course.level === 'Intermediate' 
                ? 'bg-yellow-100 text-yellow-800' 
                : 'bg-red-100 text-red-800'
          }`}>
            {course.level}
          </span>
        </div>
        <h3 className="text-xl font-bold mb-2 text-gray-800">{course.title}</h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">{course.description}</p>
        <div className="flex justify-between items-center mb-3">
          <div className="flex items-center">
            <Star className="h-4 w-4 text-yellow-500 fill-current" />
            <span className="text-sm ml-1 font-medium">{course.rating}</span>
            <span className="text-xs text-gray-500 ml-1">({course.students.toLocaleString()} students)</span>
          </div>
          <span className="text-sm font-medium">{course.duration}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-xl font-bold text-blue-600">₹{course.price.toLocaleString()}</span>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
            Enroll Now
          </button>
        </div>
      </div>
    </div>
    </NavLink>
  );
};

export default CourseCard;