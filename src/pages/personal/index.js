import {Button, Card, Col, Divider, Flex, Image, Menu, Row, Typography} from "antd";
import React, {useEffect} from "react";
import user, {fetchUserInfo} from "@/store/modules/user";
import {useDispatch, useSelector} from "react-redux";
import "./index.css"
import {Outlet, useNavigate} from "react-router-dom";
import {
    HistoryOutlined, LikeOutlined,
    SaveOutlined, StarOutlined,
    UserOutlined,

} from "@ant-design/icons";


const userInfo = {
    avatar: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/9cf3c914-ba6d-41ee-90c6-a9903c35cfcf/dgpd7if-4a5c116d-6a14-408d-a0c1-2259a0850e85.jpg/v1/fit/w_512,h_768,q_70,strp/backwards_by_darky591976_dgpd7if-375w-2x.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzY4IiwicGF0aCI6IlwvZlwvOWNmM2M5MTQtYmE2ZC00MWVlLTkwYzYtYTk5MDNjMzVjZmNmXC9kZ3BkN2lmLTRhNWMxMTZkLTZhMTQtNDA4ZC1hMGMxLTIyNTlhMDg1MGU4NS5qcGciLCJ3aWR0aCI6Ijw9NTEyIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.-A9lKihRBD1BQuiwH7RTeoDXa2TctQ1DEN48vNe1Umc",
    name: "jack",
    description: "hi, I am jack",
    rank: 100,
    likes: 100,
    beSaved: 100,
    following: 100,
    followed: 100,

}

const items = [
    {
        key: "/user",
        label: "my posts",
        icon: <HistoryOutlined/>,
    },
    {
        key: "/user/saved",
        label: "my saved",
        icon: <SaveOutlined/>,
    },
    {
        key: "/user/info",
        label: "my info",
        icon: <UserOutlined/>,
    },

]

const {Text, Title} = Typography;

const Personal = () => {

    const navigate = useNavigate()
    // const dispatch = useDispatch()
    // useEffect(() => {
    //     dispatch(fetchUserInfo())
    // }, [dispatch]);
    // const userInfo = useSelector(state => state.user.userInfo)
    const handleMenuClick = (e) => {
        console.log(e.key);
        navigate(e.key)
    }

    const followList = (e) => {
        console.log(e);
    }

    return (
        <div  style={{display: 'flex', justifyContent: 'center', height: "1000px"}}>
            <Row className={"user-center"} gutter={16}>
                <Col span={6}>
                    <Flex vertical style={{marginBottom: '24px'}}>
                        <Flex vertical={true} justify={'center'} align={'center'}>
                            <Image width={150}
                                   src={userInfo.avatar}
                                   fallback="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMIAAADDCAYAAADQvc6UAAABRWlDQ1BJQ0MgUHJvZmlsZQAAKJFjYGASSSwoyGFhYGDIzSspCnJ3UoiIjFJgf8LAwSDCIMogwMCcmFxc4BgQ4ANUwgCjUcG3awyMIPqyLsis7PPOq3QdDFcvjV3jOD1boQVTPQrgSkktTgbSf4A4LbmgqISBgTEFyFYuLykAsTuAbJEioKOA7DkgdjqEvQHEToKwj4DVhAQ5A9k3gGyB5IxEoBmML4BsnSQk8XQkNtReEOBxcfXxUQg1Mjc0dyHgXNJBSWpFCYh2zi+oLMpMzyhRcASGUqqCZ16yno6CkYGRAQMDKMwhqj/fAIcloxgHQqxAjIHBEugw5sUIsSQpBobtQPdLciLEVJYzMPBHMDBsayhILEqEO4DxG0txmrERhM29nYGBddr//5/DGRjYNRkY/l7////39v///y4Dmn+LgeHANwDrkl1AuO+pmgAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAwqADAAQAAAABAAAAwwAAAAD9b/HnAAAHlklEQVR4Ae3dP3PTWBSGcbGzM6GCKqlIBRV0dHRJFarQ0eUT8LH4BnRU0NHR0UEFVdIlFRV7TzRksomPY8uykTk/zewQfKw/9znv4yvJynLv4uLiV2dBoDiBf4qP3/ARuCRABEFAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghgg0Aj8i0JO4OzsrPv69Wv+hi2qPHr0qNvf39+iI97soRIh4f3z58/u7du3SXX7Xt7Z2enevHmzfQe+oSN2apSAPj09TSrb+XKI/f379+08+A0cNRE2ANkupk+ACNPvkSPcAAEibACyXUyfABGm3yNHuAECRNgAZLuYPgEirKlHu7u7XdyytGwHAd8jjNyng4OD7vnz51dbPT8/7z58+NB9+/bt6jU/TI+AGWHEnrx48eJ/EsSmHzx40L18+fLyzxF3ZVMjEyDCiEDjMYZZS5wiPXnyZFbJaxMhQIQRGzHvWR7XCyOCXsOmiDAi1HmPMMQjDpbpEiDCiL358eNHurW/5SnWdIBbXiDCiA38/Pnzrce2YyZ4//59F3ePLNMl4PbpiL2J0L979+7yDtHDhw8vtzzvdGnEXdvUigSIsCLAWavHp/+qM0BcXMd/q25n1vF57TYBp0a3mUzilePj4+7k5KSLb6gt6ydAhPUzXnoPR0dHl79WGTNCfBnn1uvSCJdegQhLI1vvCk+fPu2ePXt2tZOYEV6/fn31dz+shwAR1sP1cqvLntbEN9MxA9xcYjsxS1jWR4AIa2Ibzx0tc44fYX/16lV6NDFLXH+YL32jwiACRBiEbf5KcXoTIsQSpzXx4N28Ja4BQoK7rgXiydbHjx/P25TaQAJEGAguWy0+2Q8PD6/Ki4R8EVl+bzBOnZY95fq9rj9zAkTI2SxdidBHqG9+skdw43borCXO/ZcJdraPWdv22uIEiLA4q7nvvCug8WTqzQveOH26fodo7g6uFe/a17W3+nFBAkRYENRdb1vkkz1CH9cPsVy/jrhr27PqMYvENYNlHAIesRiBYwRy0V+8iXP8+/fvX11Mr7L7ECueb/r48eMqm7FuI2BGWDEG8cm+7G3NEOfmdcTQw4h9/55lhm7DekRYKQPZF2ArbXTAyu4kDYB2YxUzwg0gi/41ztHnfQG26HbGel/crVrm7tNY+/1btkOEAZ2M05r4FB7r9GbAIdxaZYrHdOsgJ/wCEQY0J74TmOKnbxxT9n3FgGGWWsVdowHtjt9Nnvf7yQM2aZU/TIAIAxrw6dOnAWtZZcoEnBpNuTuObWMEiLAx1HY0ZQJEmHJ3HNvGCBBhY6jtaMoEiJB0Z29vL6ls58vxPcO8/zfrdo5qvKO+d3Fx8Wu8zf1dW4p/cPzLly/dtv9Ts/EbcvGAHhHyfBIhZ6NSiIBTo0LNNtScABFyNiqFCBChULMNNSdAhJyNSiECRCjUbEPNCRAhZ6NSiAARCjXbUHMCRMjZqBQiQIRCzTbUnAARcjYqhQgQoVCzDTUnQIScjUohAkQo1GxDzQkQIWejUogAEQo121BzAkTI2agUIkCEQs021JwAEXI2KoUIEKFQsw01J0CEnI1KIQJEKNRsQ80JECFno1KIABEKNdtQcwJEyNmoFCJAhELNNtScABFyNiqFCBChULMNNSdAhJyNSiECRCjUbEPNCRAhZ6NSiAARCjXbUHMCRMjZqBQiQIRCzTbUnAARcjYqhQgQoVCzDTUnQIScjUohAkQo1GxDzQkQIWejUogAEQo121BzAkTI2agUIkCEQs021JwAEXI2KoUIEKFQsw01J0CEnI1KIQJEKNRsQ80JECFno1KIABEKNdtQcwJEyNmoFCJAhELNNtScABFyNiqFCBChULMNNSdAhJyNSiECRCjUbEPNCRAhZ6NSiAARCjXbUHMCRMjZqBQiQIRCzTbUnAARcjYqhQgQoVCzDTUnQIScjUohAkQo1GxDzQkQIWejUogAEQo121BzAkTI2agUIkCEQs021JwAEXI2KoUIEKFQsw01J0CEnI1KIQJEKNRsQ80JECFno1KIABEKNdtQcwJEyNmoFCJAhELNNtScABFyNiqFCBChULMNNSdAhJyNSiEC/wGgKKC4YMA4TAAAAABJRU5ErkJggg=="
                            />
                            <br/>
                            <Title level={3}>{userInfo.name}</Title>
                            <Text>{userInfo.description}</Text>
                        </Flex>
                        <Divider/>
                        <Card title="Achivement" >
                            <div>
                                <Button type={'text'} style={{width:'100%'}} icon={<LikeOutlined />}>likes: {userInfo.likes}</Button>
                            </div>
                            <br/>
                            <div>
                                <Button type={'text'} style={{width:'100%'}} icon={<StarOutlined />}>saved: {userInfo.beSaved}</Button>
                            </div>
                            <Row justify={'center'} >
                                <Col span={12} align={'center'}>
                                    <Card hoverable={true} bordered={false} onClick={()=>{followList('followed')}}>
                                        <Flex vertical={true} align={'center'}>
                                            <div>Followed</div>
                                            <div>{userInfo.followed}</div>
                                        </Flex>
                                    </Card>
                                </Col>
                                <Col span={12} align={'center'} >
                                    <Card hoverable={true} bordered={false} onClick={()=>{followList('following')}}>
                                        <Flex vertical={true} align={'center'} >
                                            <div>Following</div>
                                            <div>{userInfo.following}</div>
                                        </Flex>
                                    </Card>
                                </Col>
                            </Row>
                        </Card>
                    </Flex>
                    <Divider/>
                    <Menu
                        style={{borderRight: 0}}
                        onClick={handleMenuClick}
                        items={items}
                    >
                    </Menu>
                </Col>
                <Col span={18}>
                    <Outlet/>
                </Col>
            </Row>
        </div>
    )
}

export default Personal