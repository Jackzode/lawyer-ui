import {Button, Col, Divider, Flex, Row, Typography} from "antd";
import {useEffect} from "react";
import {fetchUserInfo} from "@/store/modules/user";
import {useDispatch, useSelector} from "react-redux";
import "./index.css"
import {Outlet} from "react-router-dom";


const {Text} = Typography;

const UserCenter = () => {


    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchUserInfo())
    }, [dispatch]);
    const userInfo = useSelector(state => state.user.userInfo)


    return (
        <div className={'flexCenter'}>
            <Row className={"user-center"} gutter={16}>
                    <Col span={6} >
                        <Flex vertical style={{marginBottom: '24px'}}>
                            <Flex justify={'center'}>
                                <img alt={"please login"} style={{display: 'block', width: 100}}
                                     src={userInfo.avatar}></img>
                            </Flex>
                            <Flex vertical align={"center"}>
                                <h4>{userInfo.name}</h4>
                                <Text>{userInfo.description}</Text>
                                <Text>Ranking {userInfo.ranking}</Text>
                            </Flex>
                        </Flex>
                        <Divider/>
                        <Flex vertical={true} >
                            <Button type={"text"} href={"/profile"}> 我的文章</Button>
                            <Button type={"text"} href={"/profile/collection"}>收藏夹</Button>
                            <Button type={"text"} href={"/profile/personal"}>我的资料</Button>
                        </Flex>
                        <Divider/>
                    </Col>
                    <Col span={18} >
                        <Outlet/>
                    </Col>


            </Row>
        </div>
    )
}

export default UserCenter