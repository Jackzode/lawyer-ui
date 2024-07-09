import React from 'react';
import {Typography, Tabs, Card} from 'antd';
import "./index.css"
import SiteInfo from "@/component/siteInfo/siteInfo";
import LoginForm from "@/component/loginForm";
import RegisterForm from "@/component/registerForm";


const {Title} = Typography
const items = [
    {
        label: (<h3>Login</h3>),
        key: '1',
        children: <LoginForm/>
    },
    {
        label: (<h3>Register</h3>),
        key: '2',
        children: <RegisterForm/>
    },
]

const Login = () => {


    return (
        <div className={'login-page'}>
            <div className={'login-card'}>
                <Title style={{color: '#1677ff', textAlign: 'center'}}>Lawyer</Title>
                <Card>
                    <Tabs defaultActiveKey="1" items={items}  />
                </Card>
                <SiteInfo/>
            </div>
        </div>
    );
};
export default Login;