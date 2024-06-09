import React from 'react';
import {Button, Card, Flex, Form, Input, message} from 'antd';
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
        <Form
            onFinish={onFinish}
            name="wrap"
            labelCol={{
                flex: '110px',
            }}
            labelAlign="left"
            labelWrap
            wrapperCol={{
                flex: 1,
            }}
            colon={false}
            style={{
                maxWidth: 600,
            }}
        >
            <Form.Item
                label="Username"
                name="username"
                rules={[
                    {
                        required: true,
                    },
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Password"
                name="password"
                rules={[
                    {
                        required: true,
                    },
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="Email"
                name="email"
                rules={[
                    {
                        required: true,
                    },
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item label=" " className={'flexCenter'}>
                <Button type="primary" htmlType="submit">
                    Sign up
                </Button>
            </Form.Item>
        </Form>
    )
}


const RegisterApp = () => {
  return (
      <div className={'flexCenter'} style={{marginTop: "24px"}}>
          <Flex vertical={true} align={'center'}>
              <h2>Register</h2>
              <div style={{marginTop: '24px'}}>
                  <Card hoverable style={{width: '500px'}}>
                      <br/>
                      <RegisterForm  />
                  </Card>
              </div>
          </Flex>
      </div>
  )
}

export default RegisterApp