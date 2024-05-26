import React, {useState} from "react"
import LOGO from "@/assets/logo/blue-logo.png"
import "./header.css"
import Message from "src/component/header/message"
import User from "@/component/user/user"
import { Link } from "react-router-dom"
import {Avatar, Button} from "antd"
import {
    CreditCardOutlined,
    HomeOutlined, MessageOutlined, PlusOutlined,
    PlusSquareOutlined,
    QuestionCircleOutlined,
    SearchOutlined,
    TeamOutlined
} from "@ant-design/icons"

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
]

const Header = () => {
    // window.addEventListener("scroll", function () {
    //     const header = this.document.querySelector(".header")
    //     header.classList.toggle("active", this.window.scrollY > 100)
    // })
    // window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" })
    const [navList, setNavList] = useState(false)

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
                        <User />
                    </div>
                </div>
            </div>
        </>
    )
}
export default Header