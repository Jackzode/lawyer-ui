import React, {useState} from "react"
import LOGO from "@/assets/logo/blue-logo.png"
import "./header.css"
import Message from "src/component/header/message"
import User from "@/component/user/user"
import { Link } from "react-router-dom"
import {Button} from "antd"
import {PlusSquareOutlined, SearchOutlined} from "@ant-design/icons"

const nav = [
    {
        text: "Case",
        path: "/",
    },
    {
        text: "Question",
        path: "/question",
    },
    {
        text: "Market",
        path: "/market",
    },
    {
        text: "Order",
        path: "/order",
    },
]

const Header = () => {
    window.addEventListener("scroll", function () {
        const header = this.document.querySelector(".header")
        header.classList.toggle("active", this.window.scrollY > 100)
    })
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" })
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
                    <div className='headNav'>
                        <ul className={navList ? "small" : "flexBetween"}>
                            {nav.map((list, index) => (
                                <li key={index}>
                                    <Link className='link' to={list.path}>{list.text}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className='search flexBetween'>
                        <input type='text' placeholder='Search...'/><SearchOutlined />
                    </div>
                    <div>
                        <Button type="primary" style={{border: '2px solid #ebeced', borderRadius: '5px'}} >Query</Button>
                    </div>
                    <div>
                        <Message />
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