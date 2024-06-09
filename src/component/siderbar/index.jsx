import {Badge, Button, Flex, Menu} from "antd";
import {
    CustomerServiceOutlined,
    QuestionCircleOutlined,
    StarOutlined,
    UserAddOutlined,
    WarningOutlined
} from "@ant-design/icons";
import React from "react";

const items = [
    {
        key: "/saved",
        label: (
            <Flex justify="space-between">
                <span>
                  <StarOutlined/>
                  <span>saved</span>
                </span>
                <span><Badge count={10}  /></span>
            </Flex>
        ),
    },
    {
        key: "/focus",
        label: (
            <Flex justify="space-between">
                <span>
                  <QuestionCircleOutlined/>
                  <span>focus</span>
                </span>
                <span><Badge count={10}  /></span>
            </Flex>
        )
    },
    {
        key: "/invited",
        label: (
            <Flex justify="space-between">
                <span>
                  <UserAddOutlined/>
                  <span>invited</span>
                </span>
                <span><Badge count={10}  /></span>
            </Flex>
        )
    },
    {
        key: "/report",
        label: (
            <Flex justify="space-between">
                <span>
                  <WarningOutlined/>
                  <span>report</span>
                </span>
                <span><Badge count={0}  /></span>
            </Flex>
        )
    },
    {
        key: "/help",
        label:  (
            <Flex justify="space-between">
                <span>
                  <CustomerServiceOutlined/>
                  <span>help</span>
                </span>
                <span><Badge count={0}  /></span>
            </Flex>
        )
    },

]

const SideBar = (props) => {

    const handleMenuClick = (e) => {
        console.log(e.key);
    }

    return (

        <div>
            <Menu
                style={{height: '100%', borderRight: 0}}
                onClick={handleMenuClick}
                items={items}
            >
            </Menu>
        </div>


    )
}
export default SideBar