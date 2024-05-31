import React, {useState} from "react"
import {SettingOutlined, QuestionCircleOutlined, LogoutOutlined} from "@ant-design/icons"
import {Link, useNavigate} from "react-router-dom"
import {Avatar, Button, message} from "antd"
import "./user.css"
import { useDispatch } from "react-redux"
import {clearUserInfo, setIsLogin} from "@/store/modules/user";


export const User = () => {
    const user = true
    const [profileOpen, setProfileOpen] = useState(false)

    const close = () => {
        setProfileOpen(null)
    }

    const dispatch = useDispatch()
    const navigator = useNavigate()
    const logoutHandler = (e) => {
        dispatch(clearUserInfo())
        dispatch((setIsLogin(false)))
        navigator("/")
        message.success("logout...")
    }
    return (
        <>
            <div className='profile'>
                {user ? (
                    <div>
                        <div>
                            <Avatar shape="square" size={45}  src='https://www.guibook.com/upload/image/202005/15908056758211805.jpg' alt='' onClick={() => setProfileOpen(!profileOpen)}/>
                        </div>
                        {profileOpen && (
                            <div className='openProfile' onMouseLeave={close}>
                                <Link to='/profile'>
                                    <Button type='text' className='box'>
                                        <SettingOutlined className='icon'/>
                                        <h4>My Account</h4>
                                    </Button>
                                </Link>
                                <Link  to='/help'>
                                    <Button type='text' className='box'>
                                        <QuestionCircleOutlined className='icon'/>
                                        <h4>Help</h4>
                                    </Button>
                                </Link>
                                <Link  to='/'>
                                    <Button type='text' className='box' onClick={()=>(logoutHandler())}>
                                        <LogoutOutlined className='icon'/>
                                        <h4>Log Out</h4>
                                    </Button>
                                </Link>
                            </div>
                        )}
                    </div>
                ) : (
                    <button>Login</button>
                )}
            </div>
        </>
    )
}

export default User
