import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import NavAndSidebarLayout from '../sidebar/Sidebar';
import './mainLayout.css';

const MainLayout = () => {
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }

  return (
    <div>
      <NavAndSidebarLayout mainComponent={<Outlet />} />
    </div>
  );
};

export default MainLayout;
