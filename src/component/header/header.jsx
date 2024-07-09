import React from "react"
import LOGO from "@/assets/logo/blue-logo.png"
import "./header.css"
import AvatarApp from "@/component/avatar"
import { useNavigate} from "react-router-dom"

import {Button, Flex, Image, Input} from "antd";
import HeadMenu from "@/component/headmenu";
import {useSelector} from "react-redux";

const { Search } = Input;




const Header = () => {

    const isLogin = useSelector(state => state.user.token);
    const navigate = useNavigate()
    const clickLogo = ()=>{
        navigate("/");
    }
    // todo
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

                    {isLogin ? <AvatarApp /> : <Button shape={'round'} href={'/login'} >Login </Button>}
                </Flex>
            </div>
        </>
    )
}
export default Header