import React, {useState} from 'react';
import {Card, Button, Tooltip, Avatar} from 'antd';
import {
    LikeOutlined,
    CommentOutlined, SendOutlined
} from '@ant-design/icons';
import "./post.css"
const { Meta } = Card;


const Post = ({question}) => {

    const [expanded, setExpanded] = useState(false);

    const toggleExpand = () => {
        setExpanded(!expanded);
    };

    return  (

        <Card
            style={{marginBottom: 10}}
            actions={[
                <Tooltip title="Like">
                    <LikeOutlined key="like"/>
                    <span style={{paddingLeft: 8}}>{question.likes}</span>
                </Tooltip>,
                <Tooltip title="Comment">
                    <CommentOutlined key="comment"/>
                    <span style={{paddingLeft: 8}}>{question.comments}</span>
                </Tooltip>,
                <Tooltip title="Send">
                    <SendOutlined key="send"/>
                </Tooltip>,
            ]}
        >
            <Meta style={{marginBottom: '10px'}}
                avatar={<Avatar className={'flexCenter'} src={question.avatar}/>}
                title={
                    <div className={'flexBetween'}>
                        <span>{question.name}</span>
                        <span>
                            <Button type="link" size="small" style={{marginLeft: 8}}>
                                + Follow
                            </Button>
                        </span>
                    </div>
                }

            />
            {question.content}
            {question.image && <img src={question.image} alt="Post" style={{width: '100%', marginTop: 16}}/>}
        </Card>
    )


};


export default Post;








/*<Card className={'card'}>
                <Meta style={{marginBottom: '2px'}} title={question.title} description={question.description}/>
                <div>
                        {expanded ? question.content : question.content.substring(0, 100)}
                        {question.content.length > 100 && !expanded && <span>...</span>}
                        <span onClick={toggleExpand} style={{marginLeft: '5px', cursor: 'pointer'}}>
                                {expanded ? <UpOutlined/> : <DownOutlined/>}
                        </span>
                </div>

                <div style={{marginTop: '5px'}}>
                    <div style={{display: 'flex', justifyContent: 'flex-start'}}>
                        <Button style={{width: 'auto'}} icon={<LikeOutlined />} type="text">{question.views}</Button>
                        <Button style={{width: 'auto'}} icon={<DislikeOutlined />} type="text">{question.views}</Button>
                        <Button style={{width: 'auto'}} icon={<EyeOutlined/>} type="text">{question.views}</Button>
                        <Button style={{width: 'auto'}} icon={<MessageOutlined/> } type="text">{question.answers}</Button>
                    </div>

                </div>
        </Card>*/
