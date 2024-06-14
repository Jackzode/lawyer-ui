import React from 'react';
import {Card, Avatar, Button, Row, Col, Typography} from 'antd';
import './index.scss'
import lgo from "@/assets/avatar/logo300.png"

const {Text} = Typography
const {Meta} = Card;

const UserCard = ({user}) => {
    return (
        <Card
            onClick={(e)=>(console.log(e))}
            hoverable
            style={{height: '240px',}}

            cover={<img alt="cover" src={lgo}/>}
        >
            <Meta
                avatar={<Avatar src={user.avatar}/>}
                title={
                    <div>
                        <Text style={{fontWeight: 'bold'}}>{user.name}</Text>
                        <h4>{user.followers} followers</h4>
                    </div>
                }
                description={<div className={'profile-title'}>{user.title}</div>}
            />
            <div className={'flexCenter'} style={{marginTop: '14px'}}>
                <Button style={{width: '70%'}} shape={'round'}>Follow</Button>
            </div>
        </Card>
    );
};


const users = [
    {
        name: 'Michael Yan',
        title: 'Founder & CEO @ Simplify | Looking for a job? @ Simplify | Looking for a job @ Simplify | Looking for a job @ Simplify | Looking for a job',
        avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
        coverImage: 'https://via.placeholder.com/300x100',
        followers: '80,995',
        followedBy: 'Zhiq',
    },
    {
        name: 'Michael Yan',
        title: 'Founder',
        avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
        coverImage: 'https://via.placeholder.com/300x100',
        followers: '80,995',
        followedBy: 'Zhiq',
    },
    {
        name: 'Michael Yan',
        title: 'Founder & CEO @ Simplify | Looking for a job?',
        avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
        coverImage: 'https://app2.sweden.com/wp-content/uploads/2019/10/Hawaii_TopSites_WaikikiBeach.jpg',
        followers: '80,995',
        followedBy: 'Zhiq',
    },
    {
        name: 'Michael Yan',
        title: 'Founder & CEO @ Simplify | Looking for a job?',
        avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
        coverImage: 'https://via.placeholder.com/300x100',
        followers: '80,995',
        followedBy: 'Zhiq',
    },
    {
        name: 'Michael Yan',
        title: 'Founder & CEO @ Simplify | Looking for a job?',
        avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
        coverImage: 'https://via.placeholder.com/300x100',
        followers: '80,995',
        followedBy: 'Zhiq',
    }, {
        name: 'Michael Yan',
        title: 'Founder & CEO @ Simplify | Looking for a job?',
        avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
        coverImage: 'https://via.placeholder.com/300x100',
        followers: '80,995',
        followedBy: 'Zhiq',
    }, {
        name: 'Michael Yan',
        title: 'Founder & CEO @ Simplify | Looking for a job?',
        avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
        coverImage: 'https://via.placeholder.com/300x100',
        followers: '80,995',
        followedBy: 'Zhiq',
    }, {
        name: 'Michael Yan',
        title: 'Founder & CEO @ Simplify | Looking for a job?',
        avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
        coverImage: 'https://via.placeholder.com/300x100',
        followers: '80,995',
        followedBy: 'Zhiq',
    },
    // Add more user objects here
];

const FollowSuggestions = () => {
    return (
        <div className={'flexCenter'}>
            <div className="follow-suggestions">
                <Card>
                    <h2>People who follow Google also follow</h2>
                    <Row gutter={[16, 16]}>
                        {users.map(user => (
                            <Col key={user.name} xs={24} sm={12} md={8} lg={8} xl={8}>
                                <UserCard user={user}/>
                            </Col>
                        ))}
                    </Row>
                </Card>
            </div>
        </div>
    );
};


const Specialist = () =>{
    return (
        <div>
            <FollowSuggestions/>
        </div>
    )
}
export default Specialist;

