import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { ArrowLeft, ArrowRight } from "lucide-react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const DemoRegistration = ({ courses }) => {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (courses.length > 0 && !selectedCourse) {
      setSelectedCourse(courses[0]);
    }
  }, [courses, selectedCourse]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would send this data to your backend
    console.log("Form submitted:", {
      name,
      email,
      phone,
      course: selectedCourse?.title,
    });
    setSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setName("");
      setEmail("");
      setPhone("");
      setSubmitted(false);
    }, 3000);
  };

  const NextArrow = ({ onClick }) => {
    return (
      <button
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-blue-600 text-white p-2 rounded-full shadow-md"
        onClick={onClick}
      >
        <ArrowRight size={20} />
      </button>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <button
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-blue-600 text-white p-2 rounded-full shadow-md"
        onClick={onClick}
      >
        <ArrowLeft size={20} />
      </button>
    );
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (_, next) => {
      setSelectedCourse(courses[next]);
    },
  };

  if (!selectedCourse) return null;

  return (
    <div className="bg-gradient-to-r  from-blue-50 to-indigo-50 rounded-lg shadow-lg overflow-hidden mb-10">
      <div className="grid grid-cols-1  md:grid-cols-2">
        <div className="p-6 md:p-8 h-5/6">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Register for a Free Demo
          </h2>
          <p className="text-gray-600 mb-6">
            Experience our world-class courses with a free demo session. Fill
            out the form to get started.
          </p>

          {submitted ? (
            <div
              className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4"
              role="alert"
            >
              <strong className="font-bold">Success!</strong>
              <span className="block sm:inline">
                {" "}
                We've received your registration for the free demo of{" "}
                {selectedCourse.title}. We'll contact you shortly!
              </span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="course"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Selected Course
                </label>
                <select
                  id="course"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  value={selectedCourse.id}
                  onChange={(e) => {
                    const course = courses.find(
                      (c) => c.id === parseInt(e.target.value)
                    );
                    if (course) setSelectedCourse(course);
                  }}
                >
                  {courses.map((course) => (
                    <option key={course.id} value={course.id}>
                      {course.title}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors font-medium"
              >
                Register for Free Demo
              </button>
            </form>
          )}
        </div>

        <div className="bg-gray-800 text-white">
          <Slider {...settings} className="h-full">
            {courses.map((course) => (
              <div
                key={course.id}
                className="outline-none h-[400px] md:h-[500px] flex items-center"
              >
                <div className="relative w-full h-full">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover opacity-50"
                  />
                  <div className="absolute inset-0 flex flex-col justify-center p-6 md:p-8 bg-gradient-to-t from-black/80 to-transparent">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-xs font-semibold px-2 py-1 bg-blue-500 text-white rounded-full">
                        {course.category}
                      </span>
                      <span
                        className={`text-xs font-semibold px-2 py-1 rounded-full ${
                          course.level === "Beginner"
                            ? "bg-green-500 text-white"
                            : course.level === "Intermediate"
                            ? "bg-yellow-500 text-white"
                            : "bg-red-500 text-white"
                        }`}
                      >
                        {course.level}
                      </span>
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold mb-2">
                      {course.title}
                    </h3>
                    <p className="text-sm md:text-base text-gray-300 mb-4 line-clamp-2 md:line-clamp-3">
                      {course.description}
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-bold">
                        ₹{course.price.toLocaleString()}
                      </span>
                      <span className="text-sm">{course.duration}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default DemoRegistration;
