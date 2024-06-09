import React, { useState } from 'react';
import {Avatar, Button, Col, Flex, Input, List, Row, Tooltip, Typography} from 'antd';
import { SmileOutlined, SendOutlined, PictureOutlined } from '@ant-design/icons';
import Picker from '@emoji-mart/react';




const { TextArea} = Input;
const { Paragraph } = Typography;


const initialComments = [
    {
        id: 1,
        parentId: null,
        author: 'Alice',
        avatar: 'https://www.planetware.com/wpimages/2019/12/hawaii-in-pictures-beautiful-places-to-photograph-hanauma-bay-oahu.jpg',
        content: 'This is the first comment.',
        datetime: '10:00 AM',
        replies: [
            {
                id: 2,
                parentId: 1,
                author: 'Bob',
                avatar: 'https://www.planetware.com/wpimages/2019/12/hawaii-in-pictures-beautiful-places-to-photograph-hanauma-bay-oahu.jpg',
                content: 'This is a reply to the first comment.',
                datetime: '10:05 AM',
                replies: [],
            },
        ],
    },
    {
        id: 3,
        parentId: null,
        author: 'Charlie',
        avatar: 'https://www.planetware.com/wpimages/2019/12/hawaii-in-pictures-beautiful-places-to-photograph-hanauma-bay-oahu.jpg',
        content: 'This is another comment.',
        datetime: '10:10 AM',
        replies: [],
    },
];




const Comments = () => {
    const [comments, setComments] = useState(initialComments);
    const [inputValue, setInputValue] = useState('');
    const [showEmojiPicker, setShowEmojiPicker] = useState(false);

    const handleAddComment = (parentId = null) => {
        if (inputValue.trim()) {
            const newComment = {
                id: comments.length + 1,
                parentId,
                author: 'User Name',
                avatar: 'https://via.placeholder.com/40',
                content: inputValue,
                datetime: new Date().toLocaleTimeString(),
                replies: [],
            };

            if (parentId) {
                const updatedComments = comments.map(comment => {
                    if (comment.id === parentId) {
                        return { ...comment, replies: [...comment.replies, newComment] };
                    }
                    return comment;
                });
                setComments(updatedComments);
            } else {
                setComments([...comments, newComment]);
            }

            setInputValue('');
        }
    };

    const handleEmojiSelect = (emoji) => {
        console.log(emoji);
        setInputValue(inputValue + emoji.native);
        setShowEmojiPicker(false);
    };

    const renderComments = (comments) => {
        console.log(comments);
        return comments.map(comment => (
            <div key={comment.id} style={{ marginLeft: comment.parentId ? 20 : 0, marginTop: 10 }}>
                <Row gutter={1} justify={'space-between'}>
                    <Col span={2}>
                        <Avatar src={comment.avatar} alt={comment.author} />
                    </Col>
                    <Col span={21} >
                        <strong>{comment.author}</strong>
                        <Paragraph>{comment.content}</Paragraph>
                        <Flex justify={'space-between'} align={'center'}>
                            <span style={{color: '#999'}}>{comment.datetime}</span>
                            <Button type="link" onClick={() => handleAddComment(comment.id)}>Reply</Button>
                        </Flex>
                    </Col>
                </Row>
                {comment.replies && renderComments(comment.replies)}
            </div>
        ));
    };

    return (
        <div style={{marginTop: 10 }}>
            <Flex style={{marginBottom: 10 }}>
                <Avatar src="https://via.placeholder.com/40" alt="User" />
                <div style={{ marginLeft: 10, flex: 1 }}>
                    <TextArea
                        rows={1}
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        placeholder="add comment..."
                        onPressEnter={() => handleAddComment()}
                    />
                    <Flex justify={'space-between'} style={{marginTop: 10 }}>
                        <div>
                            <Tooltip title="Emoji">
                                <Button
                                    icon={<SmileOutlined />}
                                    onClick={() => setShowEmojiPicker(!showEmojiPicker)}
                                />
                            </Tooltip>
                            <Tooltip title="Attach Image">
                                <Button icon={<PictureOutlined />} />
                            </Tooltip>
                        </div>
                        <Button type="primary" size={'middle'} icon={<SendOutlined />} onClick={() => handleAddComment()}>
                            Send
                        </Button>
                    </Flex>
                    {showEmojiPicker && (<div style={{ position: 'absolute', zIndex: 1000 }} >
                            <Picker set="apple" onEmojiSelect={handleEmojiSelect} />
                        </div>
                    )}
                </div>
            </Flex>
            <List
                className="comment-list"
                header={`${comments.length} ${comments.length > 1 ? 'comments' : 'comment'}`}
                itemLayout="horizontal"
                dataSource={comments}
                renderItem={item => (
                    <div>
                        {renderComments([item])}
                    </div>
                )}
            />
        </div>
    );
};

export default Comments;
