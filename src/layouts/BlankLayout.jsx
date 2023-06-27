import React from 'react';
import './blankLayout.css';
import { Outlet } from 'react-router-dom';

const BlankLayout = () => {
  return (
    <div>
      <div>hey</div>
      <Outlet />
    </div>
  );
};

export default BlankLayout;
