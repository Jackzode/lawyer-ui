import React, {useEffect, useRef, useState} from "react";
import Post from "@/component/post"
import {Affix, Button, Card, Col, Divider, Dropdown, message, Row, Skeleton} from "antd";
import Profile from "@/component/profile";
import SiteInfo from "@/component/siteInfo/siteInfo";
import RecList from "src/component/recommend";
import {useSelector} from 'react-redux'
import {getQuestionAPI} from "@/apis/question";
import {DownOutlined, RocketOutlined} from "@ant-design/icons";
import "./index.scss"
import Advert from "@/component/advertise";

const Home = () => {

    //问题列表数据
    const [questions, setQuestion] = useState([]);

    //page
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);

    const [loading, setLoading] = useState(false);
    const [sortType, setSortType] = useState('Top');


    useEffect(() => {
        setLoading(true);
        getQuestionAPI(page, 20, sortType).then(
            response => {
                setQuestion((prev) => [...prev, ...response.data.list]);
                if (response.data.list.length < 20 || questions.length + response.data.list.length >= response.data.count) {
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
    }, [page, sortType]);



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
    const isLogin = useSelector(state => state.user.token);
    const userInfo = useSelector(state => state.user.userInfo)

    const handleDropDownClick = (e) => {
        setSortType(e.key);
    };


    const dropDownMenu = {
        items: [
            {
                label: 'Recent',
                key: 'Recent',
            },
            {
                label: 'Top',
                key: 'Top',
            },
        ],
        onClick: handleDropDownClick,
    };

    return (
        <div className={"flexCenter"}>
            <div className={'flexCenter'} style={{marginTop: '10px', width: '70%'}}>
                <Row style={{width: '100%'}} gutter={20}>
                    <Col lg={5} xs={0}>
                        <div style={{position: "sticky", top: "10px"}}>
                            {isLogin?<Profile userInfo={userInfo}/>:<Advert/>}
                        </div>
                    </Col>
                    <Col lg={13} xs={24}>
                        <Card>
                            <Button block={true} shape={'round'} href={'/create'}>start a post</Button>
                        </Card>
                        <Divider orientation={"right"}>
                            sort by
                            <Dropdown menu={dropDownMenu} trigger={["click"]}>
                                <Button size={'small'} type={'text'} icon={<DownOutlined/>} iconPosition={'end'}>
                                    {sortType}
                                </Button>
                            </Dropdown>
                        </Divider>
                        <div>
                            {questions.map(post => (
                                <Card className={'post-card'} key={post.id} >
                                    <Post closeButton={true} post={post}/>
                                </Card>
                            ))}
                            <div ref={loadMoreRef} style={{height: '20px', visibility: 'hidden'}}></div>
                            <Skeleton active loading={loading}/>
                            {!hasMore && <div>~~~nothing~~~</div>}
                        </div>

                    </Col>
                    <Col lg={6} xs={0}>
                            <RecList/>
                            <div style={{marginBottom: '10px', position: 'sticky', top: "10px"}}>
                                <Advert/>
                                <SiteInfo/>
                            </div>
                    </Col>
                    <Affix style={{position: 'fixed', bottom: '2rem', right: '27rem'}}>
                        <Button type={"text"} size={'large'} onClick={() => window.scrollTo({
                            top: 0,
                            behavior: 'smooth'
                        })}
                                icon={<RocketOutlined />}
                        >
                        </Button>
                    </Affix>
                </Row>

            </div>
        </div>

    );
}

export default Home

