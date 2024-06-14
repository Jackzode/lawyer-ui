import React, {useEffect, useState} from "react"
import { useNavigate} from "react-router-dom"
import {Avatar,  Dropdown} from "antd"
import "./index.css"
import {useDispatch, useSelector} from "react-redux"
import {clearUserInfoAndToken, setUserInfo} from "@/store/modules/user";
import {LogoutOutlined, PoweroffOutlined, SettingOutlined} from "@ant-design/icons";
import {getProfileByTokenApi} from "@/apis/user";

const items = [
    { label: 'account', key: '/user/profile', icon:<PoweroffOutlined/> }, // remember to pass the key prop
    { label: 'help', key: '/help', icon: <SettingOutlined/> },
    { label: 'logout', key: '/logout', icon: <LogoutOutlined/> },
];

const AvatarApp = () => {

    const dispatch = useDispatch()
    const navigator = useNavigate()
    const [avatar, setAvatar] = useState('')
    const logoutHandler = () => {
        dispatch(clearUserInfoAndToken())
        navigator("/")
    }

    const handleMenuClick = (e) => {
        console.log(e.key)
        switch (e.key) {
            case '/logout':
                logoutHandler();
                break;
            default:
                navigator(e.key);
        }
    }
    const localAvatar = useSelector(state => state.user.userInfo.avatar)

    useEffect(() => {
        if (localAvatar) {
            setAvatar(localAvatar)
        }else{
            getProfileByTokenApi().then((res)=>{
                    setAvatar(res.data.avatar)
                    dispatch(setUserInfo(res.data))
                }
            ).catch(error => {
                console.log(error)
            })
        }
    }, [])



    return (
        <Dropdown menu={{
            items,
            onClick: handleMenuClick,
        }} trigger={['click']} >
            <Avatar shape="square"
                    style={{cursor: 'pointer'}}
                    src={avatar}
                    alt='failed' />
        </Dropdown>
    );
}

export default AvatarApp;
