import React, {useEffect, useRef, useState} from "react";
import Post from "@/component/post"
import {Col, message, Row, Skeleton} from "antd";
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
    const [loading, setLoading] = useState(false);



    useEffect(() => {

            setLoading(true);
            getQuestionAPI(page, 10).then(
                response => {
                    console.log("response--", response);
                    setQuestion((prev) => [...prev, ...response.data]);
                    setLoading(false);
                },
            ).catch(
                error => {
                    console.log(error);
                    message.error("sorry, internal error")
                }
            )
    }, [page]);



    useEffect(()=>{
        setRecData(getRecDataAPI());
    },[])



    const observer = useRef();
    const loadMoreRef = useRef();

    useEffect(() => {
        observer.current = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting && !loading) {
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
                        <div>
                            {questions.map(q => (
                                <Post key={q.id} closeButton={true} post={q}/>
                            ))}
                            <div ref={loadMoreRef}></div>
                            <Skeleton active loading={loading}/>
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

