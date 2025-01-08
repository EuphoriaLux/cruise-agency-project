// src/components/TravelInStyleLayout.js

import React from 'react';

const TravelInStyleLayout = ({ children }) => {
  return (
    <div className="layout-style1">
      <header className="bg-blue-500 text-white p-4">
        <h1>Travel in Style</h1>
      </header>
      <main className="p-4">
        {children}
      </main>
      <footer className="bg-blue-500 text-white p-4">
        <p>&copy; 2025 Travel in Style. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default TravelInStyleLayout;
