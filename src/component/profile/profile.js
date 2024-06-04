import {Avatar, Button, Card} from "antd";
import {
    CustomerServiceOutlined,
    FieldTimeOutlined,
    HeartOutlined, SaveOutlined,
    StarOutlined,
    TeamOutlined,
    UserOutlined
} from "@ant-design/icons";
import "./index.css"





const navList = [
    {id: 1, title: '稍后阅读', link: '#', className: 'navLi', icon: <FieldTimeOutlined/>},
    {id: 2, title: '我的关注', link: '#', className: 'navLi', icon: <HeartOutlined/>},
    {id: 3, title: '我的收藏', link: '#', className: 'navLi', icon: <StarOutlined/>},
    {id: 4, title: '我的邀请', link: '#', className: 'navLi', icon: <TeamOutlined/>},
    {id: 5, title: '帮助与客服', link: '#', className: 'navLi', icon: <CustomerServiceOutlined/>}
]



const Profile = ({userInfo}) => {
    return (
        <div>
            <Card style={{ marginBottom: "10px" }} >
                <div className={"flexCenter"} style={{flexDirection: 'column',fontWeight:"bold"}}>
                    <div>
                        <Avatar
                            src={<img src={userInfo.avatar}  alt={""}/>}
                            size={70}
                            shape="circle"
                        />
                    </div>
                    <div >{userInfo.name}</div>
                    <div>{userInfo.description}</div>
                </div>
                <div className={"flexBetween"}>
                    <span><UserOutlined/>  Follow</span>
                    <span>{userInfo.follow}</span>
                </div>
                <div className={"flexBetween"}>
                    <span><StarOutlined />  Likes</span>
                    <span>{userInfo.likes}</span>
                </div>
                <div className={"flexBetween"}>
                    <span><SaveOutlined />  Collection</span>
                    <span>{userInfo.collection}</span>
                </div>
                <div style={{ marginTop: 16 }}>
                    <Button type="primary" block href={"/profile"}>My Profile</Button>
                </div>
            </Card>
            <Card bordered={false}>
                <ul>
                    {navList.map(item => (
                        <li className={item.className} key={item.id}>
                            <Button style={{width: "90%"}} icon={item.icon} href={item.link} type="text">{item.title}</Button>
                        </li>
                    ))}
                </ul>
            </Card>
        </div>
    )
}


export default Profile