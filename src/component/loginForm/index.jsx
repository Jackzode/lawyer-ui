import {Button, Card, Checkbox, Divider, Flex, Form, Input, message} from "antd";
import {GoogleOutlined, LockOutlined, UserOutlined, WechatOutlined} from "@ant-design/icons";
import React from "react";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import {fetchLogin} from "@/store/modules/user";


const LoginForm = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const onFinish = async (values) => {
        console.log(values)
        // 触发异步action fetchLogin
        dispatch(fetchLogin(values)).then((res) => {
                console.log("---", res.data)
            }
        ).catch(
            message.error('registration failed')
        )
        // 1. 跳转到首页
        navigate('/')
        // 2. 提示一下用户
        message.success('登录成功')
    }
    return (

            <Flex vertical={true} align={'center'} justify={'center'} >
                <Form
                    name="normal_login"
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                    validateTrigger="onBlur"
                >
                    <Form.Item
                        name="email"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your email',
                            },
                        ]}
                    >
                        <Input size="large" prefix={<UserOutlined/>} placeholder="Email"/>
                    </Form.Item>
                    <Form.Item
                        name="pass"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your Password',
                            },
                        ]}
                    >
                        <Input.Password
                            size="large"
                            prefix={<LockOutlined/>}
                            placeholder="Password"
                        />
                    </Form.Item>
                    <Form.Item>
                        <Form.Item name="remember" valuePropName="checked" noStyle>
                            <Checkbox>Remember me</Checkbox>
                        </Form.Item>
                        <a className="login-form-forgot" href="#">
                            Forgot password
                        </a>
                    </Form.Item>
                    <Button type="primary" htmlType="submit" style={{width: '100%'}}>
                        <span>Log in</span>
                    </Button>
                </Form>
                <Divider style={{margin: '11px 0'}} orientation={'center'}>other</Divider>
                <div>
                    <Button icon={<GoogleOutlined/>} type={'text'}>gmail</Button>
                    <Button icon={<WechatOutlined/>} type={'text'}>wechat</Button>
                </div>
            </Flex>

    )
}

export default LoginForm