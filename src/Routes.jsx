import React from 'react';
import { Routes as ReactRoutes, Route } from 'react-router-dom';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import Dashboard1 from './pages/dashboard/Dashboard1';
import Dashboard2 from './pages/dashboard/Dashboard2';
import MainLayout from './layouts/mainLayout/MainLayout';
import BlankLayout from './layouts/blankLayout/BlankLayout';
import Page404 from './pages/404-page/404Page';
import Instock from './pages/instock/Instock';
import Orders from './pages/orders/Orders';

const Routes = () => {
  return (
    <ReactRoutes>
      <Route path="/" element={<MainLayout />}>
        <Route path="dashboard-1" element={<Dashboard1 />}></Route>
        <Route path="dashboard-2" element={<Dashboard2 />}></Route>
        <Route path="instock" element={<Instock />}></Route>
        <Route path="orders" element={<Orders />}></Route>
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
