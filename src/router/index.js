import { createBrowserRouter} from "react-router-dom"
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
import EmailVerifyPage from "@/pages/emailverify";
import HelpPage from "@/pages/help";
import NotFoundPage from "@/pages/notFount";
import ProtectedRoute from "@/router/protect";

const router = createBrowserRouter([
    {
        path: "/test",
        element: <Test/>
    },
    {
        path: "/",
        element: <Layout />,
        auth: false,
        children: [
            {
                index: true,
                element:  <Home />,
                auth: false,
            },
            {
                path: '/specialist',
                element: <Specialist />,
                auth: false,
            },
            {
                path: '/order',
                element: <Order />,
                auth: false,
            },
            {
                path : "/user",
                element: <ProtectedRoute><Personal /></ProtectedRoute>,
                auth: false,
                children: [
                    {
                        path: "/user/info",
                        element: <UserInfo/>,
                        auth: false,
                    },
                    {
                        index: true,
                        element: <History/>,
                        auth: false,
                    },
                    {
                        path: "/user/saved",
                        element: <Saved/>,
                        auth: false,
                    },
                    {
                        path: "/user/password",
                        element: <Password/>,
                        auth: false,
                    }
                ]
            },
            {
                path : "create",
                element: <Create />,
                auth: false,
            },
            {
                path : "message",
                element: <Message />,
                auth: false,
            },
            {
                path : "notification",
                element: <Notification />,
                auth: false,
            }
        ]
    },
    {
        path: "/login",
        element: <ProtectedRoute><Login /></ProtectedRoute>,
        auth: false,
    },
    {
        path: "/email/verification",
        element: <EmailVerifyPage/>,
        auth: false,
    },
    {
        path: "/help",
        element: <HelpPage/>,
        auth: false,
    },
    {
        path: "*", // 捕获所有未匹配的路径
        element: <NotFoundPage />,
        auth: false,
    }

])


export default router




