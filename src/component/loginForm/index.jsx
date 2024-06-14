import {Button, Checkbox, Divider, Flex, Form, Input, message} from "antd";
import {GoogleOutlined, LockOutlined, UserOutlined, WechatOutlined} from "@ant-design/icons";
import React , {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import {setToken} from "@/store/modules/user";
import {loginAPI} from "@/apis/user";


const LoginForm = () => {

    const navigate = useNavigate()
    const [rememberMe, setRememberMe] = useState(true);
    const [form] = Form.useForm();
    const dispatch = useDispatch()

    useEffect(() => {
        const savedUserEmail = localStorage.getItem('email');
        const savedPassword = localStorage.getItem('password');
        if (savedUserEmail && savedPassword) {
            form.setFieldsValue({
                email: savedUserEmail,
                password: savedPassword,
            });
            setRememberMe(true);
        }
    }, [form]);

    const handleRememberMeChange = (e) => {
        setRememberMe(e.target.checked);
    };

    const onFinishUserLogin = async (values) => {

        if (rememberMe) {
            localStorage.setItem('email', values.email);
            localStorage.setItem('password', values.password);
        } else {
            localStorage.removeItem('email');
            localStorage.removeItem('password');
        }
        // 触发异步action fetchLogin
        loginAPI(values).then(
            (res) => {
                dispatch(setToken(res.data.token));
                message.success('login successful');
                navigate('/')
            }
        ).catch(
            (err)=>{
                console.log(err)
                message.error('login failed')
            }
        )


    }
    return (

        <Flex vertical={true} align={'center'} justify={'center'}>
            <Form
                name="normal_login"
                initialValues={{
                    remember: true,
                }}
                form={form}
                onFinish={onFinishUserLogin}
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
                    name="password"
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
                    <Form.Item name="remember"  noStyle>
                        <Checkbox checked={rememberMe} onChange={handleRememberMeChange}>Remember me</Checkbox>
                    </Form.Item>
                    {/*todo*/}
                    <a href={'/'} >Forgot password</a>
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