import React from "react";

export default function Loading() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-green-50 via-white to-blue-50 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950 flex flex-col items-center justify-center">
      {/* Main Loading Container */}
      <div className="flex flex-col items-center space-y-8">
        {/* Logo/Brand */}
        <div className="flex flex-col items-center space-y-4">
          <div className="relative">
            {/* Animated Circle Background */}
            <div className="w-24 h-24 rounded-full bg-gradient-to-r from-blue-400 to-blue-600 animate-pulse shadow-lg"></div>
            
            {/* Center Icon */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-12 h-12 bg-white dark:bg-zinc-900 rounded-full flex items-center justify-center shadow-inner">
                <div className="w-6 h-6 bg-blue-500 rounded-full animate-bounce"></div>
              </div>
            </div>
            
            {/* Rotating Ring */}
            <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-blue-500 border-r-blue-400 animate-spin"></div>
          </div>
          
          {/* Brand Text */}
          <div className="text-center">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent animate-pulse">
              VeerPreps
            </h1>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              Signing you in...
            </p>
          </div>
        </div>

        {/* Progress Dots */}
        <div className="flex space-x-2">
          {[0, 1, 2, 3].map((index) => (
            <div
              key={index}
              className="w-3 h-3 bg-blue-500 rounded-full animate-bounce"
              style={{
                animationDelay: `${index * 0.1}s`,
                animationDuration: '0.6s'
              }}
            ></div>
          ))}
        </div>

        {/* Loading Bar */}
        <div className="w-64 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-blue-500 to-blue-400 rounded-full animate-pulse"></div>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-blue-400/30 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${3 + Math.random() * 2}s`
              }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}
