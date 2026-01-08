import React from 'react';
import { UserCircle } from 'lucide-react';

const Header = ({ user }) => {
  const displayName = user?.name || 'User';

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl ml-32 font-bold text-gray-900">Career guidance</h1>
          <div className="flex items-center space-x-3">
            <UserCircle className="w-6 h-6 text-gray-600" />
            <span className="text-gray-700">{displayName}</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
