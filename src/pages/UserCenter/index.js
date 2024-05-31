import {Card, Flex} from "antd";

import "./index.css"
import {useEffect, useState} from "react";
import {fetchUserInfo} from "@/store/modules/user";






const UserCenter = () => {

    const [userInfo, setUserInfo] = useState({})

    useEffect(() => {
        setUserInfo(fetchUserInfo())
    }, []);

    return (
        <div style={{width: '100%'}} className={'flexCenter'}>
            <div className={"user-center"}>
                <Flex vertical >
                    <Flex style={{marginBottom: '24px'}}>
                        <img style={{display: 'block', width: 100}}
                             src={userInfo.avatar}></img>
                        <Flex vertical justify="space-between" style={{marginLeft: '30px'}}>
                            <h4>{userInfo.name}</h4>
                            <text>{userInfo.description}</text>
                            <text>Ranking   {userInfo.ranking}</text>
                        </Flex>
                    </Flex>
                    <Flex>
                        <Flex style={{width: '30%'}}>
                           <Card hoverable style={{width: '100%', marginRight: '15px'}}>
                               个人信息侧边栏
                           </Card>
                        </Flex>
                        <Flex style={{width: '70%'}} >
                            <Card hoverable style={{width: '100%'}}>
                                文章列表
                            </Card>
                        </Flex>
                    </Flex>
                </Flex>
            </div>
        </div>
    )
}

export default UserCenter