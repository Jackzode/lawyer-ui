import {questions} from "@/data/const";
import React, {useEffect, useState} from "react";
import QuestionCard from "@/component/question/question"
import {message, Skeleton, Col, Row} from "antd";
import "./case.css"
import Sider from "@/component/sider/sider";

const content = "我想学习编程！我想学习编程！我想学习编程！我想学习编程！我想学习编程！我想学习编程！我想学习编程！" +
    "我想学习编程！我想学习编程！我想学习编程！我想学习编程！我想学习编程！我想学习编程！我想学习编程！我想学习编程！" +
    "我想学习编程！我想学习编程！我想学习编程！我想学习编程！我想学习编程！我想学习编程！我想学习编程！我想学习编程！我想学习编程！" +
    "我想学习编程！我想学习编程！我想学习编程！我想学习编程！我想学习编程！我想学习编程！" +
    "我想学习编程！我想学习编程！我想学习编程！我想学习编程！我想学习编程！我想学习编程！" +
    "我想学习编程！我想学习编程！我想学习编程！我想学习编程！我想学习编程！我想学习编程！"

const Case = ()=>{

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const appendData = () => {
        setLoading(true)
        let body = [1, 2, 3, 4, 5 ,6, 7, 8]
        const newData = body.map((item, index) => ({"id": index+data.length, "title": "如何学习编程？"+index+data.length, "description": "我想学习编程", "tags": ["编程", "学习"], "views": 1000, "answers": 50, "content": content}));
        setData(prevData => [...prevData, ...newData]);
        message.success(`${body.length} more items loaded!`);
        // fetch(fakeDataUrl)
        //     .then((res) => res.json())
        //     .then((body) => {
        //         const newData = body.results.map((item, index) => ({"id": index+data.length, "title": "如何学习编程？", "description": "我想学习编程", "tags": ["编程", "学习"], "views": 1000, "answers": 50, "content": "我想学习编程！"}));
        //         setData(data.concat(newData));
        //         message.success(`${body.results.length} more items loaded!`);
        //     });
        setLoading(false)
    };
    useEffect(() => {
        appendData()
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            if (window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight-200) {
                // 检测到滚动到底部
                setLoading(true); // 开始加载更多数据
                appendData();
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={'case-container'}>
            <Row className={'case-row'}>
                <Col span={17}>
                    <div className={'case-list'}>
                        {data.map(question => (
                            <QuestionCard key={question.id} question={question}/>
                        ))}
                        {loading && <div><Skeleton active={true}/></div>}
                    </div>
                </Col>
                <Col span={7}>
                    <div className={'case-sidebar'}>
                        <Sider/>
                    </div>
                </Col>
            </Row>
        </div>

    );
}

export default Case