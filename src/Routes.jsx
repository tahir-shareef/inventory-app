import React from 'react';
import { Routes as ReactRoutes, Route } from 'react-router-dom';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import Dashboard from './pages/dashboard/Dashboard1';
import MainLayout from './layouts/mainLayout/MainLayout';
import BlankLayout from './layouts/blankLayout/BlankLayout';
import Page404 from './pages/404-page/404Page';

const Routes = () => {
  return (
    <ReactRoutes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Dashboard />}></Route>
        <Route path="*" element={<Page404 />}></Route>
      </Route>
      <Route path="/" element={<BlankLayout />}>
        <Route path="/register" element={<Signup />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Route>
    </ReactRoutes>
  );
};

export default Routes;
