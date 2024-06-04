import React, {useState} from 'react';
import {Card, Button, Tooltip, Avatar, Input} from 'antd';
import {
    LikeOutlined,
    CommentOutlined, SendOutlined
} from '@ant-design/icons';
import "./post.css"

const {Meta} = Card;


const Post = ({post}) => {


    const [showComments, setShowComments] = useState(false);

    const toggleComments = () => {
        setShowComments(!showComments);
    };

    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpansion = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div>
            <Card
                hoverable={true}
                style={{marginBottom: 10}}
                actions={[
                    <Button icon={<LikeOutlined/>} type="text">{post.likes}</Button>,
                    <Button icon={<CommentOutlined/>} type="text" onClick={toggleComments}/>,
                    <Button icon={<SendOutlined/>} type="text">Send</Button>,
                ]}
            >
                <Meta style={{marginBottom: '10px'}}
                      avatar={<Avatar className={'flexCenter'} src={post.avatar}/>}
                      title={
                          <div className={'flexBetween'}>
                              <span>{post.name}</span>
                              <span>
                            <Button type="link" size="small" style={{marginLeft: 8}}>
                                + Follow
                            </Button>
                        </span>
                          </div>
                      }
                />
                <div>
                    <div className={'post-content ' + (isExpanded? '' : 'truncate-text')} dangerouslySetInnerHTML={{__html: post.content}}/>
                    {!isExpanded&&<Button type={"text"} onClick={toggleExpansion}>see more</Button>}
                </div>
            </Card>
            {showComments && (
                <Card>
                    <div className="post-comment-input">
                        <Input placeholder="Add a comment..."/>
                    </div>
                    <div className="post-comments">
                        {post.comments.map((comment, index) => (
                            <div key={index} className="post-comment">
                                comment...
                            </div>
                        ))}
                    </div>
                </Card>
            )}</div>
    )


};


export default Post;


/*<Card className={'card'}>
                <Meta style={{marginBottom: '2px'}} title={home.title} description={home.description}/>
                <div>
                        {expanded ? home.content : home.content.substring(0, 100)}
                        {home.content.length > 100 && !expanded && <span>...</span>}
                        <span onClick={toggleExpand} style={{marginLeft: '5px', cursor: 'pointer'}}>
                                {expanded ? <UpOutlined/> : <DownOutlined/>}
                        </span>
                </div>

                <div style={{marginTop: '5px'}}>
                    <div style={{display: 'flex', justifyContent: 'flex-start'}}>
                        <Button style={{width: 'auto'}} icon={<LikeOutlined />} type="text">{home.views}</Button>
                        <Button style={{width: 'auto'}} icon={<DislikeOutlined />} type="text">{home.views}</Button>
                        <Button style={{width: 'auto'}} icon={<EyeOutlined/>} type="text">{home.views}</Button>
                        <Button style={{width: 'auto'}} icon={<MessageOutlined/> } type="text">{home.answers}</Button>
                    </div>

                </div>
        </Card>*/
