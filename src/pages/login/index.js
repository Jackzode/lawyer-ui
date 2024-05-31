import React from 'react';
import {LockOutlined, UserOutlined} from '@ant-design/icons';
import {Button, Card, Checkbox, Form, Input, message} from 'antd';
import LOGO from "@/assets/logo/blue-logo.png"
import "./index.css"
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {fetchLogin, setIsLogin} from "@/store/modules/user";

const Login = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const onFinish = async (values) => {
        console.log(values)
        // 触发异步action fetchLogin
        await dispatch(fetchLogin(values))
        dispatch(setIsLogin(true))
        // 1. 跳转到首页
        navigate('/')
        // 2. 提示一下用户
        message.success('登录成功')
    }
    return (
        <div className={'login'}>
            <Card className={"login-form-container flexCenter"}>
                <img className="login-logo" src={LOGO} alt=""/>
                <Form
                    name="normal_login"
                    className="login-form"
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                    validateTrigger="onBlur"
                >
                    <Form.Item
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your Username!',
                            },
                        ]}
                    >
                        <Input prefix={<UserOutlined className="site-form-item-icon"/>} placeholder="Username"/>
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your Password!',
                            },
                        ]}
                    >
                        <Input
                            prefix={<LockOutlined className="site-form-item-icon"/>}
                            type="password"
                            placeholder="Password"
                        />
                    </Form.Item>
                    <Form.Item>
                        <Form.Item name="remember" valuePropName="checked" noStyle>
                            <Checkbox>Remember me</Checkbox>
                        </Form.Item>

                        <a className="login-form-forgot" href="/user/receivepw">
                            Forgot password
                        </a>
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            <span>Log in</span>
                        </Button>
                        Or <a href="/user/register">register now!</a>
                    </Form.Item>
                </Form>
            </Card>
        </div>
    );
};
export default Login;