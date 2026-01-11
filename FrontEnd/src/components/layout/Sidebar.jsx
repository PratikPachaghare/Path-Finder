import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  Menu,
  X,
  BarChart2,
  Map,
  Bot,
  GraduationCap,
  UserCog,
  Activity,
  Settings,
  LogOut,
  Home,
} from 'lucide-react';

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState(location.pathname);

  useEffect(() => {
    setActive(location.pathname);
  }, [location.pathname]);

  const toggleSidebar = () => setIsOpen(!isOpen);
  const handleNavigation = (path) => navigate(path);
  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.reload();
  };

  // Hide sidebar when on course video page
  if (location.pathname.startsWith('/CourseVedio')) {
    return null;
  }

  return (
    <>
      <button
        onClick={toggleSidebar}
        className="fixed top-4 left-4 z-50 p-2 rounded-lg bg-white shadow-lg lg:hidden"
      >
      {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      <div
        className={`fixed top-0 left-0 h-full bg-white shadow-xl transition-transform duration-300 transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0 w-64 z-40`}
      >
        <div className="flex flex-col h-full p-4">
          {/* Logo Section */}
          <div
            className="flex items-center gap-2 mb-8 ml-2 cursor-pointer"
            onClick={() => navigate('/welcome')}
          >
            <Bot className="w-10 h-10 text-blue-600" />
            <span className="text-2xl font-bold text-blue-600">Sarthi AI</span>
          </div>

          <div className="flex-1 space-y-4 mt-2">
            {[
              { path: '/welcome', label: 'Home', icon: Home },
              { path: '/assessment', label: 'Assessment', icon: BarChart2 },
              { path: '/roadmap', label: 'Roadmap Dashboard', icon: Map },
              { path: '/Resume', label: 'Resume Builder', icon: Settings },
              { path: '/chatBot', label: 'Talk to AI', icon: Bot },
              { path: '/consultant', label: 'Consultant', icon: UserCog },
              { path: '/courses', label: 'Courses', icon: GraduationCap },
              { path: '/predict', label: 'Prediction', icon: Activity },
            ].map(({ path, label, icon: Icon }) => (
              <button
                key={path}
                onClick={() => handleNavigation(path)}
                className={`w-full flex items-center gap-2 px-2 py-2 rounded-lg transition-colors ${
                  location.pathname.startsWith(path)
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-700 hover:bg-blue-50'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span>{label}</span>
              </button>
            ))}
          </div>

          <div className="space-y-4 pt-4 border-t">
            {/* <button
              onClick={() => handleNavigation('/settings')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                location.pathname.startsWith('/settings')
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-700 hover:bg-blue-50'
              }`}
            >
              <Settings className="w-5 h-5" />
              <span>Settings</span>
            </button> */}

            <button
              onClick={handleLogout}
              className="w-full flex items-center gap-3 px-4 py-3 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
            >
              <LogOut className="w-5 h-5" />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
