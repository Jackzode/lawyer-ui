import {Avatar, Button, Card, Flex} from "antd";
import {
    StarOutlined,
    UserOutlined,
} from "@ant-design/icons";
import "./index.css"
import React, {useEffect, useState} from "react";
import SideBar from "@/component/siderbar";
import {useDispatch, useSelector} from "react-redux";
import {getProfileByTokenApi} from "@/apis/user";
import {setUserInfo} from "@/store/modules/user";
import {useNavigate} from "react-router-dom";





const Profile = () => {

    const dispatch = useDispatch()
    const userInfo = useSelector(state => state.user.userInfo)
    const navigate = useNavigate()
    useEffect(() => {
        if (!userInfo) {
            getProfileByTokenApi().then((res)=>{
                    dispatch(setUserInfo(res.data))
                }
            ).catch(error => {
                console.log(error)
            })
        }
    }, [])

    const clickProfile = ()=>{
        navigate('/user', {state: userInfo})
    }

    return (
        <>
            <Card hoverable={true}>
                <Flex style={{marginBottom: "10px"}} vertical={true} align={'center'}>
                    <Flex vertical={true} align={'center'}>
                        <div>
                            <Avatar
                                src={<img
                                    src={userInfo.avatar}
                                    alt={""}/>}
                                size={80}
                                shape="square"
                            />
                        </div>
                        <h2>{userInfo.username}</h2>
                        <div>{userInfo.bio}</div>
                    </Flex>
                    <div><UserOutlined/> Follow &nbsp; {userInfo.follow_count}</div>
                    {/*todo {userInfo.likes}*/}
                    <div><StarOutlined/> Likes &nbsp; 1000</div>
                    <div style={{marginTop: 16}}>
                        <Button type="primary" block onClick={clickProfile}>My Profile</Button>
                    </div>
                </Flex>
            </Card>
            <Card hoverable={true} style={{marginTop: 16}}>
                <SideBar/>
            </Card>

        </>
    )
}


export default Profile