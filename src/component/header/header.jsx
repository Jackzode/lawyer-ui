import React, {useEffect, useState} from "react"
import LOGO from "@/assets/logo/blue-logo.png"
import "./header.css"
import AvatarApp from "@/component/avatar"
import { useNavigate} from "react-router-dom"
import {getToken} from "@/utils";
import {Button, Flex, Image, Input} from "antd";
import HeadMenu from "@/component/headmenu";

const { Search } = Input;




const Header = () => {

    const isLogin = !!getToken();
    const navigate = useNavigate()
    const clickLogo = ()=>{
        navigate("/");
    }

    const onSearch = (value, _e, info) => console.log(info?.source, value);


    return (
        <>
            <div className='header'>
                <Flex justify={'space-between'} className='container' align={'center'}>
                    <div style={{ cursor: 'pointer' }}>
                        <Image src={LOGO} alt='lawyer' onClick={clickLogo} preview={false}/>
                    </div>
                    <div style={{width: '36rem', height: '100%'}}>
                        <HeadMenu/>
                    </div>
                    <div style={{width:'20rem'}}>
                        <Search
                            placeholder="search..."
                            allowClear
                            // enterButton="Search"
                            size="middle"
                            onSearch={onSearch}
                        />
                    </div>
                    <Button type={'primary'} href={'/create'} shape={'round'}>Create</Button>
                    {isLogin ? <AvatarApp /> : <Button shape={'round'} href={'/login'} >Login </Button>}
                </Flex>
            </div>
        </>
    )
}
export default Header