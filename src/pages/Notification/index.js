import {Avatar, Button, Card, Col, Flex, Row, Typography, Dropdown, List, Divider} from "antd";
import React, {useEffect, useState} from "react";
import "./index.css"
import {SettingOutlined} from "@ant-design/icons";
import {getNotification} from "@/apis/question";


const {Text, Title} = Typography;

const items = [
    {
        key: '1',
        label: (
            <a target="_blank" rel="noopener noreferrer" href="#">
                system
            </a>
        ),
    },
    {
        key: '2',
        label:
            (
                <a target="_blank" rel="noopener noreferrer" href="#">
                    comments
                </a>
            ),
    },
    {
        key: '3',
        label:
            (
                <a target="_blank" rel="noopener noreferrer" href="#">
                    @ me
                </a>
            ),
    },


];





const NotificationItem = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        setData(getNotification())
    }, []);


    return (

        <List
            itemLayout="horizontal"
            dataSource={data}
            split={true}
            renderItem={(item, index) => (

                <Card style={{marginBottom: '8px'}} hoverable onClick={(event)=>{console.log(event)}}>
                    <Flex justify={'space-between'} vertical>
                        <Flex>
                            <Row style={{width: '100%'}} justify={"center"} align={'middle'}>
                                <Col span={2}>
                                    <Avatar src={item.userInfo.avatar}/>
                                </Col>
                                <Col span={19}>
                                    <Text>{item.userInfo.name}</Text> <a href={'/'}>mute</a>
                                    <Text className={'truncate-text '}>{item.content}</Text>
                                </Col>
                                <Col span={1} offset={1}>
                                    {item.time}
                                </Col>
                            </Row>

                        </Flex>
                    </Flex>
                </Card>
            )}>

        </List>

    )
}

const Notification = () => {
    return (
        <div className={'flexCenter'}>
            <div style={{marginTop: '24px', width: '650px'}}>

                <Flex justify={'space-between'} style={{marginBottom: "8px"}}>
                    <h2>Notificaton</h2>
                    <Dropdown
                        menu={{items}}
                        placement="bottom"
                        arrow={true}
                        trigger={'click'}
                    >
                        <Button>All Type</Button>
                    </Dropdown>
                </Flex>
                <NotificationItem/>

            </div>
        </div>
    );
};

export default Notification;