import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import React from "react";
// import Analytics from "../page/Analytics";
import Products from "../page/Products";
import Cart from "../page/Cart";
import Profile from "../page/Profile";
import SignUp from "../page/Signup";

export const routes = createBrowserRouter([
    {
        path: '/',
        element:<MainLayout/>,
        children:[
            // {
            //     path:'/',
            //     element:<Analytics/>
            // },
            {
                path: "/products",
                element: <Products/>
            },
            {
                path: "/cart",
                element: <Cart/>
            },
            {
                path: "/profile",
                element: <Profile/>
            },
            {
                path: "/signup",
                element: <SignUp/>
            }
        ]
    }
])