import React from 'react';
import { BookOpen, Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="bg-blue-600 text-white shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <BookOpen className="h-8 w-8" />
            <span className="text-2xl font-bold">PathFinder</span>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="hover:text-blue-200 font-medium">Home</a>
            <a href="#" className="hover:text-blue-200 font-medium">Courses</a>
            <a href="#" className="hover:text-blue-200 font-medium">About</a>
            <a href="#" className="hover:text-blue-200 font-medium">Contact</a>
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 flex flex-col space-y-4 pb-4">
            <a href="#" className="hover:text-blue-200 font-medium">Home</a>
            <a href="#" className="hover:text-blue-200 font-medium">Courses</a>
            <a href="#" className="hover:text-blue-200 font-medium">About</a>
            <a href="#" className="hover:text-blue-200 font-medium">Contact</a>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;