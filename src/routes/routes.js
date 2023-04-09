import React from "react";
import Login from "../pages/login/login";
import Profile from "../pages/profile/profile";
import PostManagement from "../pages/post/post-management";
import Post from "../pages/post/post";

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
    },
    {
        path: "/post",
        element: <Post/>,
    }
];
