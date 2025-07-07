import React from "react";
import { createBrowserRouter, Navigate } from "react-router";
import MainLayout from "../Layout/MainLayout";
import ProtectedRoute from "./ProtectedRoute";

// EXISTING PAGES
import Products from "../page/Products";
import Cart from "../page/Cart";
import Profile from "../page/Profile";
import SignUp from "../page/Signup";

// NEW PAGES
import SupportRequest from "../page/SupportRequest";
import ScheduleRepair from "../page/ScheduleRepair";
import Quote from "../page/Quote";
import KnowledgeBase from "../page/KnowledgeBase";
import SpareParts from "../page/SpareParts";
import JobBoard from "../page/JobBoard";
import Dashboard from "../page/Dashboard";
import Logout from "../page/Logout";

export const routes = createBrowserRouter([
  // public
  { path: "/signup", element: <SignUp /> },

  // protected
  {
    element: <ProtectedRoute />,
    children: [
      {
        element: <MainLayout />,
        children: [
          { index: true, element: <Navigate to="/products" replace /> },
          { path: "/products", element: <Products /> },
          { path: "/cart", element: <Cart /> },
          { path: "/profile", element: <Profile /> },

          // ✨ NEW CUSTOMER ROUTES
          { path: "/support", element: <SupportRequest /> },
          { path: "/schedule", element: <ScheduleRepair /> },
          { path: "/quote/:ticketId", element: <Quote /> },
          { path: "/kb", element: <KnowledgeBase /> },

          // ✨ NEW STAFF ROUTES
          { path: "/spares", element: <SpareParts /> },
          { path: "/jobs", element: <JobBoard /> },
          { path: "/dashboard", element: <Dashboard /> },

          { path: "/logout", element: <Logout /> },
        ],
      },
    ],
  },
]);
