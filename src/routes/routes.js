import React from "react";
import Login from "../pages/login/login";
import Profile from "../pages/profile/profile";
import PostManagement from "../pages/post/post-management";

export const routes = [
    {
        path: "/login",
        element: <Login/>,
    },
    {
        path: "/profile",
        element: <Profile/>,
    },
    {
        path: "/post-management",
        element: <PostManagement/>,
    }
];
