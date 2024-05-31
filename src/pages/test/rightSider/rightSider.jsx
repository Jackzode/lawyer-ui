import {Card, Divider, Button, Pagination, Flex, Row, Col, Avatar} from 'antd'
import "./index.css"
import {
    QuestionCircleFilled,
    UsergroupAddOutlined,
    CustomerServiceOutlined,
    TeamOutlined,
    FlagFilled,
    InfoCircleFilled,
    FieldTimeOutlined,
    HeartOutlined,
    StarOutlined, EllipsisOutlined
} from '@ant-design/icons'
import {PlusOutlined} from '@ant-design/icons'
import RecElement from '@/component/recFocus'
import RecList from "@/component/recFocus";
import React from "react";






const Sider = () => {

    const pageHandleChange = () => {

    }

    return (
        <div>
            <div>

            </div>
            <div className={'account-info sideCommon'}>
                <Flex vertical style={{width: '100%'}}>
                    {data.map(item => (
                        <Card style={{marginBottom: "8px"}} hoverable>
                            <Row>
                                <Col span={3}>
                                    <Avatar size={"large"} src={item.userInfo.avatar} shape={'square'}/>
                                </Col>
                                <Col span={19}>
                                    <div>
                                        <div>
                                            <Text strong>{item.userInfo.name}</Text>
                                            <Text strong>{item.userInfo.description}</Text>
                                        </div>
                                        <div>
                                            <Text>{item.content}</Text>
                                        </div>
                                    </div>
                                </Col>
                                <Col span={2}>
                                    <Text type="secondary" className="feed-time">{item.time}</Text>
                                    <Button type="text" icon={<EllipsisOutlined/>}/>
                                </Col>
                            </Row>
                        </Card>
                    ))}

                </Flex>
            </div>
        </div>
    )
}

export default Sider