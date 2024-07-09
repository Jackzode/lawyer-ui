import {Avatar, Button, Card, Flex, List} from "antd";
import {UsergroupAddOutlined} from "@ant-design/icons";
import React, {useEffect, useState} from "react";
import "./index.scss"
import {default_avatar_png} from "@/data/data";
import {getRecDataAPI} from "@/apis/question";

const {Meta} = Card;


const RecList = () => {
    //推荐列表
    const [recData, setRecData] = useState([]);

    useEffect(() => {
        setRecData(getRecDataAPI());
    }, [])



    const followUser = (name) => {
        console.log(name)
    }


    return (
        <div>
            <Card style={{marginBottom: '10px'}} hoverable={true} className={'rec-list'}>
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
                                        <Button type="text" size="small" style={{color: "blue"}}
                                                onClick={followUser}>Follow</Button>
                                    </Flex>
                                    <Flex>
                                        <div className={'ellipsis-text'} style={{maxWidth: '10rem'}}>
                                            {item.des}
                                        </div>
                                    </Flex>
                                </div>}
                            />
                        )}
                    />
                </div>
            </Card>
        </div>
    )
}

export default RecList


