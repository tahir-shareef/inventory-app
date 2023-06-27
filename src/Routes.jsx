import React from 'react';
import { Routes as ReactRoutes, Route } from 'react-router-dom';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import Dashboard from './pages/dashboard/Dashboard';
import MainLayout from './layouts/MainLayout';
import BlankLayout from './layouts/BlankLayout';

const Routes = () => {
  return (
    <ReactRoutes>
      <Route path="/" element={<MainLayout />}>
        <Route path="dashboard" element={<Dashboard />}></Route>
      </Route>
      <Route path="/" element={<BlankLayout />}>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Route>
    </ReactRoutes>
  );
};

export default Routes;
