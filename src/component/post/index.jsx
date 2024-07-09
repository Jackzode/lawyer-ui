import React, {useEffect, useState} from 'react';
import {Card, Button, Avatar, Flex, Typography, Divider, Row, Col} from 'antd';
import {
    LikeOutlined,
    CommentOutlined,
    SendOutlined,
    CloseOutlined, LikeFilled, StarOutlined, StarFilled
} from '@ant-design/icons';
import "./index.scss"
import Comments from "@/component/comment";
import parse from 'html-react-parser';
import DOMPurify from 'dompurify';
import {default_avatar_png} from '@/data/data'
import TimeDisplay from "@/component/timeDisplay";
import {addQuestionLikes, checkLikedApi, checkSavedApi, getQuestionLikesCount, savePostItem} from "@/apis/question";


const {Meta} = Card;
const {Paragraph, Text} = Typography;


const Post = ({hasSave, closeButton, post}) => {
    const [visible, setVisible] = useState(true);
    const [showComments, setShowComments] = useState(false);
    // const [isExpanded, setIsExpanded] = useState(false);
    const [like, setLike] = useState(false);
    const [save, setSave] = useState(false);
    const [likeCount, setLikeCount] = useState(0);

    useEffect(() => {
        const data = {
            question_id: post.id,
            author_id: post.authorID,
        }
        getQuestionLikesCount(data).then(
            (response) => {
                if (response.code === 0) {
                    setLikeCount(response.data.count);
                }
            }
        ).catch(
            (error) => {
                console.log(error)
            }
        )
    }, []);


    const handleClose = () => {
        setVisible(false);
    };

    const [expanded, setExpanded] = useState(false);

    const purePost = DOMPurify.sanitize(post.content)

    useEffect(() => {
        checkLiked();
        checkSaved();
    }, []);

    const toggleComments = () => {
        setShowComments(!showComments);
    };


    // const toggleExpansion = () => {
    //     setIsExpanded(!isExpanded);
    // };
    if (!visible) return null;

    const handleSaveClick =  () => {
        let bookmark = true;
        if (save) {
            bookmark = false
        }
        const data = {
            object_id: post.id,
            group_id: post.authorID,
            bookmark: bookmark,
        }
        savePostItem(data).then(r => {

        })
        setSave(!save)
    }

    const handleLikeClick =  () => {
        let status = true;
        if (like) {
            status = false
        }
        const data = {
            question_id: post.id,
            author_id: post.authorID,
            status: status,
        }
        addQuestionLikes(data).then(r => {

        })
        setLike(!like)
    }

    const checkLiked =  () => {
        checkLikedApi(post.id).then(
            (response) => {
                if (response.code === 0) {
                    setLike(response.data.liked);
                }
            }
        ).catch(
            (err) =>{
                console.log(err)
            }
        )
    }

    const checkSaved = async () => {
        checkSavedApi(post.id).then(
            (response) => {
                if (response.code === 0) {
                    const dataMap = new Map(Object.entries(response.data));
                    setSave(dataMap.get(post.id));
                }
            }
        ).catch(
            (err) =>{
                console.log(err)
            }
        )
    }



    return (
        <div style={{width: "100%"}}>
            <div style={{marginTop: '5px'}}>
                <Meta style={{marginBottom: '10px'}}
                      avatar={<Avatar size={65} shape={"square"} className={'flexCenter'}
                                      src={post.authorInfo.avatar || default_avatar_png}/>}
                      title={
                          <div>
                              <Flex justify={'space-between'} align={'center'}>
                                  <div>
                                      {post.authorInfo.username || "undefine"}
                                  </div>
                                  {closeButton && <Button onClick={handleClose} icon={<CloseOutlined/>} type={'text'}
                                                          size="small"/>}
                              </Flex>
                              <Flex>
                                  <Text style={{
                                      color: "#8f9595",
                                      fontSize: "0.8rem"
                                  }}>{post.authorInfo.description || "no introduction"}</Text>
                              </Flex>
                              <div><TimeDisplay timestamp={post.created_at}></TimeDisplay></div>
                          </div>
                      }
                />

                <Paragraph
                    className={'post-content '}
                    ellipsis={
                        {
                            rows: 10,
                            expandable: true,
                            symbol: 'more',
                            expanded,
                            onExpand: (_, info) => setExpanded(info.expanded),

                        }
                    }
                >
                    {parse(purePost)}
                </Paragraph>
                <Divider style={{margin: '0.2rem 5px'}}/>

                <Row justify={'space-evenly'} align={'middle'} className={'post-button'}>
                    <Col span={6}>
                        <Button size={'small'} type={"text"}
                                onClick={handleLikeClick}
                                icon={like ? <LikeFilled/> : <LikeOutlined/>}>
                            {likeCount} {like ? <span>Liked</span> : <span>Like</span>}
                        </Button>
                    </Col>
                    <Col span={6}>
                        <Button size={'small'} type="text"
                                onClick={handleSaveClick}
                                icon={save ? <StarFilled/> : <StarOutlined/>}>
                            {save ? <span>Saved</span> : <span>Save</span>}
                        </Button>
                    </Col>
                    <Col span={6}>
                        <Button size={'small'} type="text"
                                icon={<CommentOutlined/>} onClick={toggleComments}>
                            Comment
                        </Button>
                    </Col>
                    <Col span={6}>
                        <Button size={'small'} type="text"
                                icon={<SendOutlined/>}>
                            Send
                        </Button>
                    </Col>
                </Row>
                {showComments && (<Comments qid={post.id}/>)}
            </div>

        </div>
    )


};


export default Post;

