import React, {useEffect, useState} from "react";
import Post from "@/component/post/post"
import {Col, Row} from "antd";
import "./index.css"
import Profile from "@/component/profile/profile";
import SiteInfo from "@/component/siteInfo/siteInfo";
import RecList from "@/component/recFocus";
import {useDispatch, useSelector} from 'react-redux'
import {getHomePageQuestionAPI, getRecDataAPI} from "@/apis/question";
import {fetchUserInfo} from "@/store/modules/user";


const Home = () => {
    //问题列表数据
    const [questions, setQuestion] = useState([]);
    //推荐列表
    const [recData, setRecData] = useState([]);

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchUserInfo());
        setQuestion(getHomePageQuestionAPI());
        setRecData(getRecDataAPI());
    }, []);
    //用户信息
    const userInfo = useSelector(state => state.user.userInfo)


    return (
        <div className={"flexCenter"}>
            <div className={'question-container flexCenter'}>
                <Row style={{width: '100%'}} gutter={8}>
                    <Col lg={6} xs={0}>
                        <div style={{position: "sticky", top: "10px"}}>
                            <Profile userInfo={userInfo}/>
                        </div>
                    </Col>
                    <Col lg={12} xs={24}>
                        <div>
                            {questions.map(q => (
                                <Post key={q.id} post={q}/>
                            ))}
                        </div>
                    </Col>
                    <Col lg={6} xs={0}>
                        <div style={{position: "sticky"}}>
                            <RecList recData={recData}/>
                            <SiteInfo/>
                        </div>
                    </Col>

                </Row>
            </div>
        </div>

    );
}

export default Home


// fetch(fakeDataUrl)
//     .then((res) => res.json())
//     .then((body) => {
//         const newData = body.results.map((item, index) => ({"id": index+data.length, "title": "如何学习编程？", "description": "我想学习编程", "tags": ["编程", "学习"], "views": 1000, "answers": 50, "content": "我想学习编程！"}));
//         setData(data.concat(newData));
//         message.success(`${body.results.length} more items loaded!`);
//     });