import {BrowserRouter, Routes, Route} from "react-router-dom"
import Login from "@/pages/login"
import Test from "@/pages/test"
import React from 'react';
import Header from "@/component/header/header";
import Footer from "@/component/footer";
import Case from "@/pages/case/case"
import Market from "@/pages/market"

function MyRouter() {
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path={"/"} element={<Case />} />
                <Route path={'/test'} element={<Test/>}/>
                <Route path={'/market'} element={<Market/>}/>
                {/*<Route path={'/test2'} element={<Test2/>}/>*/}
                <Route path={'/login'} element={<Login/>}/>
            </Routes>
            <Footer/>
        </BrowserRouter>
    )
}

export default MyRouter

// const router = createBrowserRouter(
//     [
//         {
//             path: '/',
//             element: <App/>,
//             children: [
//                 {
//                     index: true,
//                     element: <Question/>
//                 },
//                 {
//                     path: 'transaction',
//                     element: <Transaction/>
//                 },
//                 {
//                     path: 'question',
//                     element: <Lawyer/>
//                 }
//             ]
//         },
//         {
//             path: '/login',
//             element: <Login/>
//         },
//     ]
// )
// export default router



