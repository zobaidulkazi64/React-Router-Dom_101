import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-gray-800 text-white py-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl font-semibold">My Website</h1>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <Link to="/" className="hover:text-gray-300">Home</Link>
              </li>
              <li>
                <Link to="/blogs" className="hover:text-gray-300">Blogs</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-gray-300">Contact</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-1">
        <div className="container mx-auto py-8">
          {/* Outlet for rendering child components */}
          <Outlet />
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto text-center">
          &copy; 2024 My Website. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Layout;
