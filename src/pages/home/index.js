import React, {useEffect, useRef, useState} from "react";
import Post from "@/component/post"
import {Button, Card, Col, Divider, message, Row, Skeleton, Tabs} from "antd";
import Profile from "@/component/profile";
import SiteInfo from "@/component/siteInfo/siteInfo";
import RecList from "src/component/recommend";
import { useSelector} from 'react-redux'
import {getQuestionAPI, getRecDataAPI} from "@/apis/question";


const Home = () => {
    //问题列表数据
    const [questions, setQuestion] = useState([]);
    //推荐列表
    const [recData, setRecData] = useState([]);
    //page
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);

    const [loading, setLoading] = useState(false);
    const [activeTab, setActiveTab] = useState('newest');


    useEffect(() => {
            setLoading(true);
            getQuestionAPI(page, 20, activeTab).then(
                response => {
                    setQuestion((prev) => [...prev, ...response.data.list]);
                    if (response.data.list.length < 10 || questions.length + response.data.list.length >= response.data.count) {
                        setHasMore(false);
                    }
                    setLoading(false);
                },
            ).catch(
                error => {
                    console.log(error);
                    message.error("sorry, internal error")
                }
            )
    }, [page, activeTab]);

    useEffect(()=>{
        setRecData(getRecDataAPI());
    },[])

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
    }, [loading]);




    //用户信息
    const userInfo = useSelector(state => state.user.userInfo)

    const renderPosts = () => (

        <div>
            {questions.map(post => (
                <div key={post.id}>
                    <Post closeButton={true} post={post}/>
                    <Divider/>
                </div>
            ))}
            <div ref={loadMoreRef} style={{ height: '20px', visibility: 'hidden' }}></div>
            <Skeleton active loading={loading}/>
            {!hasMore && <div>nothing~~~</div>}
        </div>
    );

    const tabsItems = [
        {
            key: 'newest',
            label: 'Newest',
            children: renderPosts(),
        },
        {
            key: 'recommend',
            label: 'Recommend',
            children: renderPosts(),
        },
    ];




    return (
        <div className={"flexCenter"}>
            <div className={'flexCenter'} style={{marginTop: '10px', width: '70%'}}>
                <Row style={{width: '100%'}} gutter={8}>
                    <Col lg={6} xs={0}>
                        <div style={{position: "sticky", top: "10px"}}>
                            <Profile userInfo={userInfo}/>
                        </div>
                    </Col>
                    <Col lg={12} xs={24}>
                        <Card>
                            <Tabs activeKey={activeTab} items={tabsItems} onChange={(key) => setActiveTab(key)} />
                        </Card>
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

