import React from 'react';
import {Button, Flex, Form, Input, message} from 'antd';
import {register} from '@/apis/user'
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {setToken, setUserInfo} from "@/store/modules/user";


const RegisterForm = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const onFinish = (value) => {
        console.log('Form values:', value)
        register(value)
            .then((response) => {
                console.log("response: ", response)
                message.success('successfully registered');
                dispatch(setToken(response.data.access_token))
                dispatch(setUserInfo(response.data))
                navigate('/'); // 注册成功后跳转到主页
            })
            .catch((error) => {
                message.error('registration failed');
            });
    };


    return (
        <Flex align={'center'} justify={'center'}>
            <Form
                style={{width: '80%'}}
                layout="vertical"
                vertical={true} align={'center'} justify={'center'}
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

                <Button style={{width: '100%', marginBottom: '5px'}} type="primary" htmlType="submit">
                    Sign up
                </Button>
            </Form>
        </Flex>
    )
}


export default RegisterForm