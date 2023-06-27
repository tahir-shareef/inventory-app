import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import "./mainLayout.css"

const MainLayout = () => {
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }

  return (
    <div>
      <div>main layout</div>
      <Outlet />
    </div>
  );
};

export default MainLayout;
