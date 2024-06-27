import {Button, Card, Col, Divider, Flex, Image, Menu, message, Row, Tooltip, Typography, Upload} from "antd";
import React, {useEffect, useState} from "react";
import "./index.css"
import {Outlet, useLocation, useNavigate} from "react-router-dom";
import {
    HistoryOutlined, LikeOutlined, SafetyCertificateOutlined,
    SaveOutlined, StarOutlined,
    UserOutlined,

} from "@ant-design/icons";
import SiteInfo from "@/component/siteInfo/siteInfo";
import {getProfileByTokenApi, uploadAvatar} from "@/apis/user";
import ImgCrop from "antd-img-crop";
import {default_avatar_png} from '@/data/data'


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


    const location = useLocation();

    const [personalInfo, setPersonalInfo] = useState({});

    const updatePersonalInfo = () => {
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
        if (!location.state.userInfo ) {
            updatePersonalInfo()
        }else{
            setPersonalInfo(location.state.userInfo)
        }
    }, []);

    // todo
    const following_count = 100
    const likes = 1000
    const beSaved = 100

    const navigate = useNavigate()

    const handleMenuClick = (e) => {
        navigate(e.key, {state: {username: personalInfo.username}})
    }

    const followList = (e) => {
        console.log(e);
    }

    const beforeUpload = (file) => {
        const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
        if (!isJpgOrPng) {
            message.error('You can only upload JPG/PNG file!');
        }
        const isLt5M = file.size / 1024 / 1024 < 5;
        if (!isLt5M) {
            message.error('Image must smaller than 2MB!');
        }
        return isJpgOrPng && isLt5M;
    };

    const handleUpload = async ({ file }) => {

        const formData = new FormData();
        formData.append('file', file);

        try {
            const response = await uploadAvatar(formData)
            if (response.code === 0) {
                setPersonalInfo((prev) => ({ ...prev, avatar: response.data.avatarUrl }));
                message.success('Upload successful');
                updatePersonalInfo()
            }else{
               throw new Error('Upload failed')
            }
        } catch (error) {
            console.log(error)
            message.error('Upload failed');
        }
    };

    return (
        <div style={{display: 'flex', justifyContent: 'center', height: "1300px"}}>
            <Row className={"user-center"} gutter={16}>
                <Col span={6}>
                    <div>
                        <Flex vertical style={{marginBottom: '24px'}}>
                            <Flex vertical={true} justify={'center'} align={'center'}>

                                <ImgCrop rotationSlider>
                                    <Upload
                                        customRequest={handleUpload}
                                        maxCount={1}
                                        accept="image/png, image/jpeg"
                                        showUploadList={false}
                                        beforeUpload={beforeUpload}
                                    >
                                        <Tooltip
                                            title="upload avatar"
                                            placement='left'
                                        >
                                            <Image
                                                   preview={false}
                                                   style={{cursor: 'pointer',objectFit: 'cover'}}
                                                   src={ personalInfo.avatar || default_avatar_png}
                                                   width={100}
                                                   height={100}
                                                   fallback={default_avatar_png}
                                                   />
                                        </Tooltip>
                                    </Upload>
                                </ImgCrop>

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