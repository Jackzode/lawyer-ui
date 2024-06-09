import React from "react"
import { useNavigate} from "react-router-dom"
import {Avatar,  Dropdown, message} from "antd"
import "./index.css"
import {useDispatch} from "react-redux"
import {clearUserInfo} from "@/store/modules/user";
import {LogoutOutlined, PoweroffOutlined, SettingOutlined} from "@ant-design/icons";

const items = [
    { label: 'account', key: '/user/profile', icon:<PoweroffOutlined/> }, // remember to pass the key prop
    { label: 'help', key: '/help', icon: <SettingOutlined/> },
    { label: 'logout', key: '/logout', icon: <LogoutOutlined/> },
];

const AvatarApp = () => {

    const dispatch = useDispatch()
    const navigator = useNavigate()
    const logoutHandler = () => {
        dispatch(clearUserInfo())
        navigator("/")
        message.success("logout...")
    }

    const handleMenuClick = (e) => {
        console.log(e.key)
        // switch (key) {
        //     case '/logout':
        //         logoutHandler();
        //         break;
        //     default:
        //         navigator(key);
        // }
    }

    return (
        <Dropdown menu={{
            items,
            onClick: handleMenuClick,
        }} trigger={['click']} >
            <Avatar shape="square"
                    style={{cursor: 'pointer'}}
                    src='https://app2.sweden.com/wp-content/uploads/2019/10/Hawaii_TopSites_WaikikiBeach.jpg'
                    alt=''/>
        </Dropdown>
    );
}

export default AvatarApp;
