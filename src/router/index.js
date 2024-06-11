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
import Saved from "@/component/saved";
import UserInfo from "@/component/userInfo";
import Personal from "src/pages/personal";
import History from "@/component/history";
import Password from "@/component/password";

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
                        element: <History/>
                    },
                    {
                        path: "/user/saved",
                        element: <Saved/>
                    },
                    {
                        path: "/user/password",
                        element: <Password/>
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
        element: <Login />,
    },


])

export default router




