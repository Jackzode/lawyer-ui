import {Avatar, Button, Card, List} from "antd";
import {PlusOutlined, UsergroupAddOutlined} from "@ant-design/icons";
import React from "react";
import "./index.css"





const RecElement = ({item}) => {

    return (
        <div style={{display: "flex", marginBottom: '6px'}} className={'flexBetween'}>
            <div style={{width: '22%'}}>
                <Avatar size={40} shape={"square"} src={item.avatar}/>
            </div>
            <div style={{flexDirection: 'column', width: '50%'}}>
                <div style={{fontWeight: '450'}}>{item.name}</div>
                <div style={{fontSize: '10px'}} >{item.des}</div>
            </div>
            <div style={{width: '23%'}}>
                <Button type="link"  className={"follow-button-style"}>Follow</Button>
            </div>
        </div>

    )

}


const RecList = ({recData}) => {
    return (
        <Card style={{marginBottom: '10px'}}>
            <div style={{marginBottom: '10px', fontSize:'18px'}}>
                <UsergroupAddOutlined/> <span>Recommend</span>
            </div>
            <div>
                {recData.map(item => (
                    <RecElement key={item.id} item={item}/>
                ))}
            </div>
        </Card>
    )
}

export default RecList