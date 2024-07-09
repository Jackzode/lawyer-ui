import React from 'react';
import { DownOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Dropdown, message, Space } from 'antd';

const handleMenuClick = (e) => {
    message.info('Click on menu item.');
    console.log('click', e);
};
const items = [
    {
        label: '1st menu item',
        key: '1',
        icon: <UserOutlined />,
    },
    {
        label: '2nd menu item',
        key: '2',
        icon: <UserOutlined />,
    },
];
const menuProps1 = {
    items,
    onClick: handleMenuClick,
};
const App = () => (
    <Space wrap>


        <Dropdown menu={menuProps1}>
            <Button>
                <Space>
                    Button
                    <DownOutlined />
                </Space>
            </Button>
        </Dropdown>

    </Space>
);
export default App;