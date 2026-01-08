import React, { useState, useMemo } from 'react';
import Header from './Header';
import CourseFilter from './CourseFilter';
import DemoRegistration from './DemoRegistration';
import CourseCard from './CourseCard';
import Footer from './Footer';
import { courses } from '../../CourseData/courses';


function CourseApp() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedLevel, setSelectedLevel] = useState('');

  // Extract unique categories and levels
  const categories = useMemo(() => {
    return [...new Set(courses.map(course => course.category))];
  }, []);

  const levels = useMemo(() => {
    return [...new Set(courses.map(course => course.level))];
  }, []);

  // Filter courses based on search term, category, and level
  const filteredCourses = useMemo(() => {
    return courses.filter(course => {
      const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                           course.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === '' || course.category === selectedCategory;
      const matchesLevel = selectedLevel === '' || course.level === selectedLevel;
      
      return matchesSearch && matchesCategory && matchesLevel;
    });
  }, [searchTerm, selectedCategory, selectedLevel]);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* <Header /> */}
      <main className="flex-grow container mx-auto px-4 py-8">
        <section className="mb-10">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Explore Our Technical Courses</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover cutting-edge technical courses designed to help you master the skills needed for today's digital world.
            </p>
          </div>
          <DemoRegistration courses={courses} />

          <CourseFilter 
            categories={categories}
            levels={levels}
            selectedCategory={selectedCategory}
            selectedLevel={selectedLevel}
            searchTerm={searchTerm}
            onCategoryChange={setSelectedCategory}
            onLevelChange={setSelectedLevel}
            onSearchChange={setSearchTerm}
          />
          
          
          
          {filteredCourses.length === 0 ? (
            <div className="text-center py-12">
              <h3 className="text-xl font-medium text-gray-600">No courses found matching your criteria</h3>
              <p className="mt-2 text-gray-500">Try adjusting your filters or search term</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCourses.map(course => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          )}
        </section>
      </main>
      
      <Footer />
    </div>
  );
}

export default CourseApp;