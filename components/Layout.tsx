import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout: React.FC = () => (
  <div className="min-h-screen flex flex-col selection:bg-blue-100 selection:text-blue-900">
    <Navbar />
    <main id="main-content" className="flex-grow">
      <Outlet />
    </main>
    <Footer />
  </div>
);

export default Layout;
