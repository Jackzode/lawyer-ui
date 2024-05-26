import {createBrowserRouter} from "react-router-dom"
import Login from "@/pages/login"
import Test from "@/pages/test"
import React from 'react';
import Case from "@/pages/case/case"
import Market from "@/pages/market"
import Layout from "@/pages/layout";
import Transaction from "@/pages/trancation";

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
                element:  <Case />
            },
            {
                path: 'specialist',
                element: <Market />
            },
            {
                path: 'order',
                element: <Transaction />
            },
        ]
    },
    {
        path: "/login",
        element: <Login />
    }
])

export default router




