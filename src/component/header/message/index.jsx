import React, {useState} from 'react';
import {MessageOutlined, BellOutlined, CommentOutlined, SoundOutlined} from '@ant-design/icons';
import { Avatar, Badge } from 'antd';
import { Link } from "react-router-dom"
import "./message.css"




const Message = () => {

    const [messageOpen, setMessageOpen] = useState(false)
    const close = () => {
        setMessageOpen(null)
    }


    return <div>
        <div className='' onClick={()=>{setMessageOpen(true)}} >
            <Badge count={5}>
                <Avatar shape="square" size="large" icon={<MessageOutlined/>}/>
            </Badge>
        </div>
        {messageOpen && (
            <div className='openMessage messageBoxItems' onMouseLeave={close}>
                <Link to='/account'>
                    <button className='box'>
                        <BellOutlined className='icon'/>
                        <h4>@ me</h4>
                    </button>
                </Link>
                <Link to='/account'>
                    <button className='box'>
                        <CommentOutlined className='icon'/>
                        <h4>reply me</h4>
                    </button>
                </Link>
                <Link to='/account'>
                    <button className='box'>
                        <SoundOutlined className='icon'/>
                        <h4>system</h4>
                    </button>
                </Link>


            </div>
        )}
    </div>
}
export default Message;