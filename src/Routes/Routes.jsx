import { createBrowserRouter, Navigate } from "react-router";
 import MainLayout from "../Layout/MainLayout";
 import React from "react";
import Products from "../page/Products";
import Cart from "../page/Cart";
import Profile from "../page/Profile";
import SignUp from "../page/Signup";
import Logout from "../page/Logout";
import ProtectedRoute from "./ProtectedRoute";

 export const routes = createBrowserRouter([
   {
     path: "/signup",
     element: <SignUp />, 
   },

   {
     element: <ProtectedRoute />,
     children: [
       {
         path: "/",
         element: <MainLayout />,
         children: [
         { index: true, element: <Navigate to="/products" replace /> },
           { path: "/products", element: <Products /> },
           { path: "/cart", element: <Cart /> },
           { path: "/profile", element: <Profile /> }, 
         { path: "/logout", element: <Logout /> },
         ],
       },
     ],
   },
 ]);

