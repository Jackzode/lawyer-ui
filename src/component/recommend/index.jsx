import {Avatar, Button, Card, Flex, List, Typography} from "antd";
import {UsergroupAddOutlined} from "@ant-design/icons";
import React from "react";
import "./index.scss"
import {default_avatar_png} from "@/data/data";

const {Text} = Typography;
const {Meta} = Card;


const RecList = ({recData}) => {

    const followUser = (name) => {
        console.log(name)
    }


    return (<Card style={{marginBottom: '10px'}} hoverable={true} className={'rec-list'}>
            <div style={{marginBottom: '10px', fontSize: '18px'}}>
                <UsergroupAddOutlined/> <span>Recommend</span>
            </div>
            <div>
                <List
                    itemLayout="horizontal"
                    dataSource={recData}
                    renderItem={(item) => (
                        <Meta
                            style={{marginBottom: '10px'}}
                            avatar={<Avatar size={45} shape={"square"} className={'flexCenter'}
                                            src={item.avatar || default_avatar_png}/>}
                            title={<div>
                                <Flex justify={'space-between'} align={'center'}>
                                    <div style={{fontSize: "0.8rem"}}>{item.name || "undefine"}</div>
                                    <Button type="text" size="small" style={{color: "blue"}} onClick={followUser}>Follow</Button>
                                </Flex>
                                <Flex>
                                    <Text
                                        style={{color: "#8f9595", fontSize: "0.8rem"}}>{item.des}
                                    </Text>
                                </Flex>
                            </div>}
                        />
                    )}
                />
            </div>
        </Card>)
}

export default RecList


