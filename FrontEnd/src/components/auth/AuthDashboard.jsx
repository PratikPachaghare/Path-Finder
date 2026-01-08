import React, { useState } from 'react';
import { Mail, Lock, User, Phone, Bot } from 'lucide-react';
import LoginPage from './LoginPage';
import RegisterPage from './RessisterPage';


const AuthDashboard = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-r from-violet-100 to-indigo-100">
      <nav className="bg-transparent py-3">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <a className="flex items-center gap-2" href="/">
            <div className="w-10 h-10 rounded-lg bg-violet-100 flex items-center justify-center">
              {/* <img alt="Logo" height="40" src="https://storage.googleapis.com/a1aa/image/F92gkSzykPQdg38gwDvB5Oi_8M-aJfvST04iBNp2Z_Q.jpg" width="40"/> */}
              <Bot className="w-10 h-10 text-blue-600" />
            </div>
            <span className="text-2xl font-bold  text-blue-600 ">
              Sarthi AI
            </span>
          </a>
          <a className="text-gray-600 hover:text-violet-600 transition-colors" href="/">Back to Home</a>
        </div>
      </nav>
      <div className="flex-grow flex items-center justify-center p-4">
        <div className="w-full max-w-lg bg-white rounded-2xl shadow-xl p-10 space-y-6">
          {isLogin ? <LoginPage /> : <RegisterPage />}
          <div className="text-center">
            <button onClick={() => setIsLogin(!isLogin)} className="text-blue-600 hover:underline">
              {isLogin ? 'Need an account? Register' : 'Already have an account? Login'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthDashboard;