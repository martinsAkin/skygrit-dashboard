import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import image from './login.png';

const SkyGritLogin: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = () => {
    console.log('Login attempt:', { email, password });
  };

  return (
    <div className="min-h-screen bg-white flex justify-between">
      <div className="w-1/3 bg-white relative overflow-hidden">
        <div className="h-full flex flex-col justify-center px-12 py-8">
          <div className="mb-12">
            <h1 className="text-3xl font-bold text-blue-600 mb-2">
              SKYGRIT<sup className="text-sm">®</sup>
            </h1>
          </div>

          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email address"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter password"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200 pr-12"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  {showPassword ? <Eye size={20} /> : <EyeOff size={20} />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center space-x-4">
                <button
                  onClick={handleSubmit}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors duration-200 font-medium"
                >
                  Log in
                </button>
              </div>
              <div className="flex items-center space-x-2 text-gray-500">
                <span>Forgot Password?</span>
                <span className="text-blue-600 hover:text-blue-700 cursor-pointer">Reset</span>
              </div>
            </div>
          </div>

          <div className="absolute bottom-8 left-12 right-12">
            <div className="text-gray-500 opacity-50 text-sm">
              Revolutionizing Post-Booking Airline Experience
            </div>
          </div>
        </div>
      </div>

      <div className="w-2/3 h-screen flex items-center justify-center" >
        <img 
        src={image} 
        alt="Login Visual" 
        className="h-full w-full object-cover object-center overflow-hidden " />
      </div>
    </div>
  );
};

export default SkyGritLogin;