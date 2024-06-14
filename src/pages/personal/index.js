import {Button, Card, Col, Divider, Flex, Image, Menu, message, Row, Typography} from "antd";
import React, {useEffect, useState} from "react";

import "./index.css"
import {Outlet, Route, Routes, useLocation, useNavigate} from "react-router-dom";
import {
    HistoryOutlined, LikeOutlined, SafetyCertificateOutlined,
    SaveOutlined, StarOutlined,
    UserOutlined,

} from "@ant-design/icons";
import UploadAvatar from "@/component/uploadAvatar";
import SiteInfo from "@/component/siteInfo/siteInfo";
import {getProfileByTokenApi} from "@/apis/user";



const items = [
    {
        label: "my posts",
        key: "/user",
        icon: <HistoryOutlined/>,
    },
    {
        key: "/user/saved",
        label: "my saved",
        icon: <SaveOutlined/>,
    },
    {
        key: "/user/info",
        label: "my info",
        icon: <UserOutlined/>,
    },
    {
        key: "/user/password",
        label: "update pin",
        icon: <SafetyCertificateOutlined/>,
    }
]

const {Text, Title} = Typography;

const Personal = () => {


    const [personalInfo, setPersonalInfo] = useState({});

    const updatePersonalInfo = ()=> {
        getProfileByTokenApi().then(
            response => {
                if (response.code === 0) {
                    setPersonalInfo(response.data);
                } else {
                    throw new Error('get info failed')
                }
            }
        ).catch(
            err => {
                console.log(err)
                message.error('get info failed')
            }
        )
    }

    useEffect(() => {
        updatePersonalInfo()
    }, []);
    // todo
    const following_count = 100
    const likes = 1000
    const beSaved = 100

    const navigate = useNavigate()

    const handleMenuClick = (e) => {
        navigate(e.key)
    }

    const followList = (e) => {
        console.log(e);
    }

    return (
        <div style={{display: 'flex', justifyContent: 'center', height: "1300px"}}>
            <Row className={"user-center"} gutter={16}>
                <Col span={6}>
                    <div>
                        <Flex vertical style={{marginBottom: '24px'}}>
                            <Flex vertical={true} justify={'center'} align={'center'}>
                                <Image width={150}
                                       src={personalInfo.avatar}
                                       fallback="data:image/png;base64,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"
                                />
                                <UploadAvatar/>
                                <br/>
                                <Title level={3}>{personalInfo.username}</Title>
                                <Text>{personalInfo.description}</Text>
                            </Flex>
                            <Divider/>
                            <Card title="Achivement">
                                <div>
                                    <Button type={'text'} style={{width: '100%'}}
                                            icon={<LikeOutlined/>}>likes: {likes}</Button>
                                </div>
                                <div>
                                    <Button type={'text'} style={{width: '100%'}}
                                            icon={<StarOutlined/>}>saved: {beSaved}</Button>
                                </div>
                                <Row justify={'center'}>
                                    <Col span={12} align={'center'}>
                                        <Card hoverable={true} bordered={false} onClick={() => {
                                            followList('followed')
                                        }}>
                                            <Flex vertical={true} align={'center'}>
                                                <div>Followed</div>
                                                <div>{personalInfo.follow_count}</div>
                                            </Flex>
                                        </Card>
                                    </Col>
                                    <Col span={12} align={'center'}>
                                        <Card hoverable={true} bordered={false} onClick={() => {
                                            followList('following')
                                        }}>
                                            <Flex vertical={true} align={'center'}>
                                                <div>Following</div>
                                                <div>{following_count}</div>
                                            </Flex>
                                        </Card>
                                    </Col>
                                </Row>
                            </Card>
                        </Flex>
                        <Divider/>
                        <Menu
                            style={{borderRight: 0}}
                            onClick={handleMenuClick}
                            items={items}
                        >
                        </Menu>
                        <SiteInfo/>
                    </div>
                </Col>
                <Col span={18}>
                    <Outlet context={{updatePersonalInfo}}/>
                </Col>
            </Row>
        </div>
    )
}

export default Personal