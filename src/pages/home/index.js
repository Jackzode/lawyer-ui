import React, {useEffect, useRef, useState} from "react";
import Post from "@/component/post"
import {Col, Row, Skeleton} from "antd";
import "./index.css"
import Profile from "@/component/profile";
import SiteInfo from "@/component/siteInfo/siteInfo";
import RecList from "src/component/recommend";
import { useSelector} from 'react-redux'
import {getRecDataAPI} from "@/apis/question";


const Home = () => {
    //问题列表数据
    const [questions, setQuestion] = useState([]);
    //推荐列表
    const [recData, setRecData] = useState([]);
    //page
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);

    const [loading, setLoading] = useState(false);
    useEffect(() => {
        // dispatch(fetchUserInfo());
        updateQuestionData(page);
        setRecData(getRecDataAPI());
    }, [page]);

    const updateQuestionData = async (page) => {
        setLoading(true);
        // Simulate a server request with a timeout
        const response = await new Promise((resolve) => {
            setTimeout(() => {
                const pageSize = 10;
                const totalItems = 50; // Assume there are a total of 50 items
                const data = Array.from({ length: pageSize }, (_, index) => ({
                    id: (page - 1) * pageSize + index + 1,
                    name: "jack",
                    content: "我想学习编程！" + ((page - 1) * pageSize + index + 1),
                    image: "https://app2.sweden.com/wp-content/uploads/2019/10/Hawaii_TopSites_WaikikiBeach.jpg",
                    likes: 100,
                    avatar: "https://app2.sweden.com/wp-content/uploads/2019/10/Hawaii_TopSites_WaikikiBeach.jpg",
                }));
                resolve({ data, total: totalItems });
            }, 1000);
        });
        if (response.data.length < 10 || questions.length + response.data.length >= response.total) {
            setHasMore(false);
        }

        setQuestion((prev) => [...prev, ...response.data]);
        setLoading(false);
    };



    const observer = useRef();
    const loadMoreRef = useRef();

    useEffect(() => {
        observer.current = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting && hasMore && !loading) {
                setPage((prev) => prev + 1);
            }
        });
        if (loadMoreRef.current) {
            observer.current.observe(loadMoreRef.current);
        }
        return () => {
            if (loadMoreRef.current) {
                observer.current.unobserve(loadMoreRef.current);
            }
        };
    }, [hasMore, loading]);




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
                                <Post key={q.id} closeButton={true} post={q}/>
                            ))}
                            <div ref={loadMoreRef}></div>
                            <Skeleton active loading={loading}/>
                            {!hasMore && <p style={{textAlign: 'center'}}>You have reached the end!</p>}
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