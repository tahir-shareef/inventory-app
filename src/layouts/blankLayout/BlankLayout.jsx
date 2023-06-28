import React from 'react';
import { Outlet } from 'react-router-dom';
import './blankLayout.css';

const BlankLayout = () => {
  return (
    <div className="blank-layout">
      <Outlet />
    </div>
  );
};

export default BlankLayout;
