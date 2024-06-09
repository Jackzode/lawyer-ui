import React, {useState} from 'react';
import {
    CreditCardOutlined,
    HomeOutlined, MessageOutlined, NotificationOutlined,
    TeamOutlined
} from '@ant-design/icons';
import {Menu} from 'antd';

const items = [
        {
            label: (
                <a href="/" >
                    question
                </a>
            ),
            path: "/",
            icon: <HomeOutlined/>
        },
        {
            label: (
                <a href="/specialist" >
                    specialist
                </a>
            ),
            path: "/specialist",
            icon: <TeamOutlined/>
        },
        {
            label: (
                <a href="/order" >
                    order
                </a>
            ),
            path: "/order",
            icon: <CreditCardOutlined/>
        },
        {
            label: (
                <a href="/message" >
                    message
                </a>
            ),
            path: "/message",
            icon: <MessageOutlined/>
        },
        {
            label: (
                <a href="/notification" >
                    notification
                </a>
            ),
            key: "/notification",
            icon: <NotificationOutlined/>

        },
    ]
;
const HeadMenu = () => {
    const [current, setCurrent] = useState('/');
    const onClick = (e) => {
        setCurrent(e.key);
    };
    return <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items}/>;
};
export default HeadMenu;