import {createBrowserRouter} from "react-router-dom"
import Login from "src/pages/login"
import Test from "@/pages/test"
import React from 'react';
import Home from "src/pages/home"
import Specialist from "@/pages/specialist"
import Layout from "src/pages/layout";
import Order from "src/pages/order";
import UserCenter from "src/pages/user";
import Create from "src/pages/create"
import Message from "src/pages/message";
import Notification from "src/pages/notification";
import Register from "@/pages/register";
import Collection from "@/component/collection";
import PersonalInfo from "@/component/personal";
import PostHistory from "src/component/historypost";

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
                path : "/profile",
                element: <UserCenter />,
                children: [
                    {
                        path: "/profile/personal",
                        element: <PersonalInfo/>
                    },
                    {
                        index: true,
                        path: "/profile",
                        element: <PostHistory/>
                    },
                    {
                        path: "/profile/collection",
                        element: <Collection/>
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




