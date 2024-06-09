import {Avatar, Button, Card, List} from "antd";
import { UsergroupAddOutlined} from "@ant-design/icons";
import React from "react";
import "./index.scss"



const RecList = ({recData}) => {

    const followUser = (name)=>{
        console.log(name)
    }


    return (
        <Card style={{marginBottom: '10px'}} hoverable={true} className={'rec-list'}>
            <div style={{marginBottom: '10px', fontSize:'18px'}}>
                <UsergroupAddOutlined/> <span>Recommend</span>
            </div>
            <div>
                <List
                    itemLayout="horizontal"
                    dataSource={recData}
                    renderItem={(item, index) => (
                        <List.Item
                            actions={[<Button size={'small'} type={'text'} onClick={()=>followUser(item.name)} >follow</Button>]}
                        >
                            <List.Item.Meta
                                avatar={<Avatar src={item.avatar} />}
                                title={<a href="/">{item.name}</a>}
                                description = {item.des}
                            />
                        </List.Item>
                    )}
                />
            </div>
        </Card>
    )
}

export default RecList