import React from "react";
import Login from "../pages/login/login";
import Profile from "../pages/profile/profile";

export const routes = [
    {
        path: "/login",
        element: <Login/>,
    },
    {
        path: "/profile",
        element: <Profile/>,
    }
];
