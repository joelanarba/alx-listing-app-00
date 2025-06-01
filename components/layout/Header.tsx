import React from "react";

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between p-4">
        <div className="text-2xl font-bold text-blue-600">ALX Listings</div>
        <nav className="hidden md:flex space-x-6">
          <a href="#" className="text-gray-700 hover:text-blue-600">
            Rooms
          </a>
          <a href="#" className="text-gray-700 hover:text-blue-600">
            Mansion
          </a>
          <a href="#" className="text-gray-700 hover:text-blue-600">
            Countryside
          </a>
        </nav>
        <div className="flex items-center space-x-4">
          <input
            type="search"
            placeholder="Search"
            className="border border-gray-300 rounded-md px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="text-blue-600 font-semibold hover:underline">
            Sign In
          </button>
          <button className="bg-blue-600 text-white px-4 py-1 rounded-md hover:bg-blue-700">
            Sign Up
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
