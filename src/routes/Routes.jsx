import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Root from "../components/Root/Root";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Navbar from "../components/Navbar/Navbar";
import Statistics from "../components/Statistics/Statistics";
import Dashboard from "../components/Dashboard/Dashboard";
import Home from "../components/Home/Home";
import Products from "../components/Products/Products";

const routes = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <ErrorPage></ErrorPage>,
      children:[
        {
          path: '/',
          element: <Home></Home>,
         
       },
        
        {
            path: '/statistics',
            element: <Statistics></Statistics>
        },
        {

          path: '/dashboard',
          element: <Dashboard></Dashboard>

        }
      ]
      
    },
  ]);

export default routes;