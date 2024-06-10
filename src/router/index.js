import {createBrowserRouter} from "react-router-dom"
import Login from "src/pages/login"
import Test from "@/pages/test"
import React from 'react';
import Home from "src/pages/home"
import Specialist from "@/pages/specialist"
import Layout from "src/pages/layout";
import Order from "src/pages/order";
import Create from "src/pages/create"
import Message from "src/pages/message";
import Notification from "src/pages/notification";
import Register from "@/pages/register";
import Saved from "@/component/saved";
import UserInfo from "@/component/userInfo";
import PostList from "src/component/postlist";
import Personal from "src/pages/personal";

const router = createBrowserRouter([
    {
        path: "/test",
        element: <Test/>
    },
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                index: true,
                element:  <Home />
            },
            {
                path: '/specialist',
                element: <Specialist />
            },
            {
                path: '/order',
                element: <Order />
            },
            {
                path : "/user",
                element: <Personal />,
                children: [
                    {
                        path: "/user/info",
                        element: <UserInfo/>
                    },
                    {
                        index: true,
                        element: <PostList/>
                    },
                    {
                        path: "/user/saved",
                        element: <Saved/>
                    }
                ]
            },
            {
                path : "create",
                element: <Create />
            },
            {
                path : "message",
                element: <Message />
            },
            {
                path : "notification",
                element: <Notification />
            }
        ]
    },
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/user/register",
        element: <Register/>
    }

])

export default router




