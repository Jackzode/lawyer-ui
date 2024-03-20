import React, {useState} from "react"
import {SettingOutlined, QuestionCircleOutlined, LogoutOutlined} from "@ant-design/icons"
import {Link} from "react-router-dom"
import {Avatar, Button} from "antd"
import "./user.css"
// import { useDispatch } from "react-redux"
// import { authActions } from "../../store/authSlice"

export const User = () => {
    const user = true
    const [profileOpen, setProfileOpen] = useState(false)

    const close = () => {
        setProfileOpen(null)
    }

    // const dispatch = useDispatch()
    // const logoutHandler = (e) => {
    //     dispatch(authActions.logout())
    // }
    return (
        <>
            <div className='profile'>
                {user ? (
                    <>
                        <div>
                            <Avatar shape="square" size={45} onClick={() => setProfileOpen(!profileOpen)}
                                    src='https://www.guibook.com/upload/image/202005/15908056758211805.jpg' alt=''/>
                        </div>
                        {profileOpen && (
                            <div className='openProfile' onMouseLeave={close}>
                                {/*<div className='image'>*/}
                                {/*    <div className='img'>*/}
                                {/*        <Avatar shape="square" size={45} src='https://www.guibook.com/upload/image/202005/15908056758211805.jpg' alt='' />*/}
                                {/*    </div>*/}
                                {/*    <div className='text'>*/}
                                {/*        <h4>Eden Smith</h4>*/}
                                {/*        <label htmlFor=''>Los Angeles,CA</label>*/}
                                {/*    </div>*/}
                                {/*</div>*/}
                                <Link to='/login'>
                                    <Button type='text' className='box'>
                                        <SettingOutlined className='icon'/>
                                        <h4>My Account</h4>
                                    </Button>
                                </Link>
                                <Link  to='/login'>
                                    <Button type='text' className='box'>
                                        <QuestionCircleOutlined className='icon'/>
                                        <h4>Help</h4>
                                    </Button>
                                </Link>
                                <Link  to='/login'>
                                    <Button type='text' className='box'>
                                        <LogoutOutlined className='icon'/>
                                        <h4>Log Out</h4>
                                    </Button>
                                </Link>
                            </div>
                        )}
                    </>
                ) : (
                    <button>Login</button>
                )}
            </div>
        </>
    )
}

export default User
