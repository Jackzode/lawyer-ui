import React from 'react';
import {Button, Col, Flex, Form, Input, message, Row} from 'antd';
import {getCaptchaApi, register} from '@/apis/user'
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {setToken, setUserInfo} from "@/store/modules/user";
import "./index.scss"

const RegisterForm = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch()
    const [form] = Form.useForm();

    const getCaptcha = () => {
        const email = form.getFieldValue('email');
        if (!email) {
            message.error('Please input your email first!');
            return;
        }
        getCaptchaApi(email).catch(
            error => {
                console.log(error);
            }
        )
    }


    const onFinish = (value) => {
        register(value)
            .then((response) => {
                if (response.code !== 0 ) {
                    message.error('registration failed');
                }else{
                    dispatch(setToken(response.data.token))
                    dispatch(setUserInfo(response.data))
                    message.success('successfully registered');
                    navigate('/'); // 注册成功后跳转到主页
                }
            })
            .catch((error) => {
                console.log(error)
                message.error('registration failed');
            });
    };


    return (
        <Flex align={'center'} justify={'center'} className={'register-form'}>
            <Form
                form={form}
                style={{width: '80%'}}
                layout="vertical"
                onFinish={onFinish}
                name="register-form"
                labelAlign="left"
                colon={false}
            >
                <Form.Item
                    label="email"
                    name="email"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input/>
                </Form.Item>
                <Form.Item
                    label="username"
                    name="username"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input/>
                </Form.Item>

                <Form.Item
                    label="password"
                    name="password"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input.Password/>
                </Form.Item>

                <Form.Item label="captcha"
                           name="captcha_code"
                           rules={[{required: true,}]}
                >
                    <Row justify={'space-between'} style={{width:'100%'}}>
                        <Col span={15}>
                            <Form.Item
                                noStyle
                            >
                                <Input />
                            </Form.Item>
                        </Col>
                        <Col span={8} align={'center'}>
                            <Button block={true} onClick={getCaptcha}>get captcha</Button>
                        </Col>
                    </Row>
                </Form.Item>
                <Button block={true} style={{marginBottom: '5px'}} type="primary" htmlType="submit">
                    Sign up
                </Button>
            </Form>
        </Flex>
    )
}


export default RegisterForm