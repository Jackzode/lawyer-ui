import React from 'react';
import { Form, Input, Button, Tabs, Row, Col } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import './index.css';

const { TabPane } = Tabs;

const LoginPage = () => {
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };

    return (
        <div className="login-page">
            <Row justify="center" align="middle" style={{ minHeight: '100vh' }}>
                <Col>
                    <div className="login-container">
                        <div className="login-header">
                            <h1>知乎</h1>
                            <p>有问题，就会有答案</p>
                        </div>
                        <Tabs defaultActiveKey="1">
                            <TabPane tab="密码登录" key="1">
                                <Form name="login" onFinish={onFinish}>
                                    <Form.Item
                                        name="username"
                                        rules={[{ required: true, message: '请输入你的手机号或邮箱!' }]}
                                    >
                                        <Input prefix={<UserOutlined />} placeholder="手机号或邮箱" />
                                    </Form.Item>
                                    <Form.Item
                                        name="password"
                                        rules={[{ required: true, message: '请输入你的密码!' }]}
                                    >
                                        <Input
                                            prefix={<LockOutlined />}
                                            type="password"
                                            placeholder="密码"
                                        />
                                    </Form.Item>
                                    <Form.Item>
                                        <Button type="primary" htmlType="submit" className="login-form-button">
                                            登录
                                        </Button>
                                    </Form.Item>
                                </Form>
                                <a href="/">忘记密码</a>
                            </TabPane>
                            <TabPane tab="验证码登录" key="2">
                                {/* 验证码登录表单 */}
                            </TabPane>
                        </Tabs>
                        <div className="other-login-methods">
                            <p>其他登录方式：</p>
                            <Button type="link">微信</Button>
                            <Button type="link">微博</Button>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default LoginPage;
