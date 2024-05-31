import React, {useEffect, useState} from "react";
import Post from "@/component/post/post"
import {message, Skeleton, Col, Row} from "antd";
import "./question.css"
import Profile from "@/component/profile/profile";
import SiteInfo from "@/component/siteInfo/siteInfo";
import RecList from "@/component/recFocus";
import { useDispatch, useSelector } from 'react-redux'
import {getHomePageQuestionAPI, getRecDataAPI} from "@/apis/question";





const Question = ()=>{

    const [questions, setQuestion] = useState([]);
    const [recData, setRecData] = useState([]);

    const userInfo = useSelector(state => state.user.userInfo)

    useEffect(() => {
        setQuestion(getHomePageQuestionAPI());
        setRecData(getRecDataAPI());
    }, []);

    return (
        <div className={'question-container'}>
            <Row>
                <Col span={3} >
                </Col>
                <Col span={4} >
                    <div style={{position: "sticky", top:"10px"}}>
                        <Profile userInfo={userInfo}/>
                    </div>
                </Col>
                <Col span={10} >
                    <div className={'post-list'}>
                        {questions.map(q => (
                            <Post key={q.id} question={q}/>
                        ))}
                    </div>
                </Col>
                <Col span={4}>
                    <div style={{position: "sticky"}}>
                        <RecList recData={recData}/>
                        <SiteInfo/>
                    </div>
                </Col>
                <Col span={3}>
                </Col>
            </Row>
        </div>

    );
}

export default Question



// fetch(fakeDataUrl)
//     .then((res) => res.json())
//     .then((body) => {
//         const newData = body.results.map((item, index) => ({"id": index+data.length, "title": "如何学习编程？", "description": "我想学习编程", "tags": ["编程", "学习"], "views": 1000, "answers": 50, "content": "我想学习编程！"}));
//         setData(data.concat(newData));
//         message.success(`${body.results.length} more items loaded!`);
//     });