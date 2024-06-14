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
        <Flex align={'center'} justify={'center'}>
            <Form
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

                <Button style={{width: '100%', marginBottom: '5px'}} type="primary" htmlType="submit">
                    Sign up
                </Button>
            </Form>
        </Flex>
    )
}


export default RegisterForm