import React, {useState} from 'react';
import {Typography, Tabs, Card} from 'antd';
import "./index.css"
import {useNavigate} from "react-router-dom";
import SiteInfo from "@/component/siteInfo/siteInfo";
import LoginForm from "@/component/loginForm";
import RegisterForm from "@/component/registerForm";


const {Title} = Typography
const items = [
    {
        label: (<h3>login</h3>),
        key: '1',
        children: <LoginForm/>
    },
    {
        label: (<h3>register</h3>),
        key: '2',
        children: <RegisterForm/>
    },
]

const Login = () => {

    const [current, setCurrent] = useState('/login')
    const navigate = useNavigate()
    const onClick = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
        navigate(e.key)
    };



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