import React, {useState, useEffect} from 'react';
import {Avatar, Button, Col, Flex, Input, List, Row, Tooltip, Typography} from 'antd';
import {SmileOutlined, SendOutlined, CaretRightOutlined} from '@ant-design/icons';
import Picker from '@emoji-mart/react';
import {addCommentApi, getCommentPageApi} from "@/apis/question";
import {default_avatar_png} from "@/data/data";
import TimeDisplay from "@/component/timeDisplay";


const {Title, Paragraph} = Typography;


const WriteComment = ({object_id, comment, finishCommentAdd = s => {}, onCommentAdded}) => {

    const [inputValue, setInputValue] = useState('');
    const [showEmojiPicker, setShowEmojiPicker] = useState(false);

    const createComment = (object_id, reply_comment_id = null, reply_user_id = null) => {
        const newComment = {
            reply_comment_id: reply_comment_id,
            original_text: inputValue.trim(),
            object_id: object_id,
            reply_user_id: reply_user_id,
        };
        addCommentApi(newComment).then(response => {
            if (response.code===0) {
                onCommentAdded(response.data);
                setInputValue('');
                finishCommentAdd('')
            }
        }).catch(
            (err) => {
                console.log(err);
            }
        )
    };

    const handleEmojiSelect = (emoji) => {
        setInputValue(inputValue + emoji.native);
        setShowEmojiPicker(false);
    };

    return (

        <Flex style={{marginBottom: 10}}>
            <Avatar src={default_avatar_png} alt="User"/>
            <div style={{marginLeft: 10, flex: 1}}>
                <Input
                    rows={1}
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="add comment..."
                    suffix={<Tooltip title="Emoji">
                        <Button
                            icon={<SmileOutlined/>}
                            onClick={() => setShowEmojiPicker(!showEmojiPicker)}
                        />
                    </Tooltip>}
                />
                <Button style={{marginTop: 5}} type="primary" size={'small'} icon={<SendOutlined/>}
                        onClick={() => createComment(object_id, comment?.comment_id, comment?.user_id)}>
                    Reply
                </Button>
                {showEmojiPicker && (<div style={{position: 'absolute', zIndex: 1000}}>
                        <Picker set="apple" onEmojiSelect={handleEmojiSelect}/>
                    </div>
                )}
            </div>
        </Flex>

    )
}


const Comments = ({qid}) => {
    const [page, setPage] = useState(1);
    const [comments, setComments] = useState([]);
    const [expandReply, setExpandReply] = useState('');
    // const [expandReplyComponent, setExpandReplyComponent] = useState(false);


    const onLoadMore = () => {
        setPage((prev) => prev + 1)
    }

    useEffect(() => {
        getCommentPageApi(qid, page).then(response => {
            if (response.code === 0) {
                setComments(prev => [...prev, ...response.data]);
            } else {
                throw new Error('get Comment failed')
            }
        }).catch(
            (err) => {
                console.log(err);
            }
        )
    }, [page]);


    const loadMore = (
        <div style={{textAlign: 'center', marginTop: 12, height: 32, lineHeight: '32px'}}>
            <Button onClick={onLoadMore}>loading more</Button>
        </div>
    )


    const handleCommentAdded = (newComment) => {
        setComments(prev => {
            if (!newComment.reply_comment_id) {
                // 如果没有父评论，直接添加到顶层
                return [newComment, ...prev];
            }
            // 找到新评论的父评论并更新其回复
            const updateReplies = (comments, newComment) => {
                return comments.map(comment => {
                    if (comment.comment_id === newComment.reply_comment_id) {
                        const updatedReplies = Array.isArray(comment.replies) ? comment.replies : [];
                        return {
                            ...comment,
                            replies: [newComment, ...updatedReplies]
                        };
                    }
                    if (comment.replies) {
                        return {
                            ...comment,
                            replies: updateReplies(comment.replies, newComment)
                        };
                    }
                    return comment;
                });
            };
            return updateReplies(prev, newComment);
        });
    };


    const renderComment = (item, level = 0) => {

        return (
            <div  key={item.comment_id}>
                <Row style={{marginLeft: level * 40}}>
                    <Col span={2}><Avatar src={item.user_avatar}/></Col>
                    <Col span={22} style={{background: "#f2f2f2", padding: 7, borderRadius: '0 15px 0 15px'}}>
                        <Row justify={'space-between'}>
                            <Title level={5}>{item.username} {item.reply_username !== "" &&
                                <span><CaretRightOutlined/> {item.reply_username}</span>}
                            </Title>
                            <TimeDisplay timestamp={item.created_at}></TimeDisplay>
                        </Row>
                        <Paragraph>
                            {item.original_text}
                        </Paragraph>
                    </Col>
                    <div style={{marginTop: 4, marginLeft: '2.5rem'}}>
                        <Button size={"small"} type={"text"}>like</Button>
                        <Button size={"small"} type={"text"}
                                style={{marginBottom: 5}}
                                onClick={() => {
                                    setExpandReply(item.comment_id)
                                }}>reply</Button>
                    </div>
                </Row>
                {expandReply===item.comment_id && (<WriteComment object_id={qid} comment={item} finishCommentAdd={setExpandReply} onCommentAdded={handleCommentAdded}/>)}
                {item.replies != null && item.replies.map((item) => renderComment(item, 1))}
            </div>
        )
    }


    return (
        <div style={{marginTop: 10}}>
            <WriteComment object_id={qid} onCommentAdded={newComment => setComments([newComment, ...comments])}/>
            <List
                split={false}
                className="comment-list"
                //header={{comments.length} {comments.length > 1 ? 'comments' : 'comment'}}
                itemLayout="horizontal"
                loadMore={loadMore}
                dataSource={comments}
                renderItem={item => (
                    <List.Item>
                        <List.Item.Meta
                            key={item.comment_id}
                            description={renderComment(item, 0)}
                        />
                    </List.Item>)}

            />
        </div>
    );
}
export default Comments;
