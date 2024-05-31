import {createBrowserRouter} from "react-router-dom"
import Login from "@/pages/login"
import Test from "@/pages/test"
import React from 'react';
import Question from "@/pages/question/question"
import Specialist from "@/pages/specialist"
import Layout from "@/pages/layout";
import Order from "@/pages/order";
import UserCenter from "@/pages/UserCenter";
import Create from  "@/pages/Create"
import Message from "@/pages/Message";
import Notification from "@/pages/Notification";
import Register from "@/pages/register";

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
                element:  <Question />
            },
            {
                path: 'specialist',
                element: <Specialist />
            },
            {
                path: 'order',
                element: <Order />
            },
            {
                path : "profile",
                element: <UserCenter />
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




