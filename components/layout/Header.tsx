// components/layout/Header.tsx

import React from "react";

const Header = () => {
  return (
    <header className="w-full shadow-sm bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <h1 className="text-2xl font-bold text-blue-600">StayFinder</h1>

        {/* Search Bar */}
        <div className="hidden md:flex items-center w-1/2">
          <input
            type="text"
            placeholder="Search properties..."
            className="w-full p-2 border rounded-lg"
          />
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-4">
          <button className="text-gray-700 hover:text-blue-600">Sign In</button>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg">
            Sign Up
          </button>
        </div>
      </div>

      {/* Accommodation Types */}
      <div className="border-t bg-gray-50 py-2">
        <div className="max-w-7xl mx-auto flex gap-6 px-4 overflow-x-auto text-sm">
          <span className="cursor-pointer hover:text-blue-600">Rooms</span>
          <span className="cursor-pointer hover:text-blue-600">Mansion</span>
          <span className="cursor-pointer hover:text-blue-600">Countryside</span>
          <span className="cursor-pointer hover:text-blue-600">Beachfront</span>
          <span className="cursor-pointer hover:text-blue-600">Luxury</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
