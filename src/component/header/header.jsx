import React, {useEffect, useState} from "react"
import LOGO from "@/assets/logo/blue-logo.png"
import "./header.css"
import User from "@/component/user/user"
import { Link } from "react-router-dom"
import {
    CreditCardOutlined,
    HomeOutlined, MessageOutlined, NotificationOutlined, PlusOutlined,
    PlusSquareOutlined,
    QuestionCircleOutlined,
    SearchOutlined,
    TeamOutlined
} from "@ant-design/icons"
import {getToken} from "@/utils";
import {Button} from "antd";
import {useSelector} from "react-redux";
import {setIsLogin} from "@/store/modules/user";

const nav = [
    {
        label: "Question",
        path: "/",
        icon: <HomeOutlined />
    },
    {
        label: "Specialist",
        path: "/specialist",
        icon: <TeamOutlined />
    },
    {
        label: "Order",
        path: "/order",
        icon: <CreditCardOutlined />
    },
    {
        label: "Message",
        path: "/message",
        icon: <MessageOutlined />
    },
    {
        label: "Notification",
        path: "/notification",
        icon: <NotificationOutlined />
    },
]


const Header = () => {

    const isLogin = useSelector(state => state.user.isLogin)

    return (
        <>
            <div className='header'>
                <div className='container flexBetween'>
                    <div className='logo flexCenter'>
                        <Link className='link' to='/'>
                            <img src={LOGO} alt='lawyer'/>
                        </Link>
                    </div>
                    <div className={'headNav'}>
                        <ul className="flexBetween" >
                            {nav.map((list, index) => (
                                <li key={index}>
                                    <Link className='link flexCenter' to={list.path}>
                                        <span style={{fontSize: '25px'}}>{list.icon}</span>
                                        <span>{list.label}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className='search flexBetween'>
                        <input type='text' placeholder='Search...'/><SearchOutlined />
                    </div>
                    <div >
                        <Link className='link flexCenter' to='/create'>
                            <span style={{fontSize: '25px'}}><PlusOutlined /></span>
                            <span>Create</span>
                        </Link>
                    </div>
                    <div>
                        {isLogin ? <User /> : <Button shape={"round"} href={'/login'} >Login</Button>}
                    </div>
                </div>
            </div>
        </>
    )
}
export default Header