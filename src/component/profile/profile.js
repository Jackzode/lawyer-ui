import {Avatar, Button, Card, Flex} from "antd";
import {
    StarOutlined,
    UserOutlined,
} from "@ant-design/icons";
import "./index.css"
import React from "react";
import SideBar from "@/component/siderbar";





const Profile = ({userInfo}) => {



    return (
        <>
            <Card hoverable={true}>
                <Flex style={{marginBottom: "10px"}} vertical={true} align={'center'}>
                    <Flex vertical={true} align={'center'}>
                        <div>
                            <Avatar
                                src={<img
                                    src={'https://app2.sweden.com/wp-content/uploads/2019/10/Hawaii_TopSites_WaikikiBeach.jpg'}
                                    alt={""}/>}
                                size={80}
                                shape="circle"
                            />
                        </div>
                        <h2>jack</h2>
                        <div>software engineer</div>
                    </Flex>
                    <div><UserOutlined/> Follow &nbsp; 1000</div>
                    <div><StarOutlined/> Likes &nbsp; 1000</div>
                    <div style={{marginTop: 16}}>
                        <Button type="primary" block href={"/profile"}>My Profile</Button>
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