import React, {useState} from 'react';
import {Card, Button, Avatar, Flex, Typography, Divider, Row, Col} from 'antd';
import {
    LikeOutlined,
    CommentOutlined,
    SendOutlined,
    CloseCircleOutlined,
    SaveOutlined
} from '@ant-design/icons';
import "./index.css"
import Comments from "@/component/comment";
import parse from 'html-react-parser';
import DOMPurify from 'dompurify';

const {Meta} = Card;
const {Paragraph} = Typography;


const Post = ({hasSave, closeButton, post}) => {

    const [visible, setVisible] = useState(true);
    const [showComments, setShowComments] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);
    const handleClose = () => {
        setVisible(false);
    };

    const [expanded, setExpanded] = useState(false);

    const purePost = DOMPurify.sanitize(post.content)


    const toggleComments = () => {
        setShowComments(!showComments);
    };


    const toggleExpansion = () => {
        setIsExpanded(!isExpanded);
    };
    if (!visible) return null;

    return (
        <div style={{width: "100%"}}>
            <Card
                hoverable={true}
                style={{marginBottom: 10}}
            >
                <Meta style={{marginBottom: '10px'}}
                      avatar={<Avatar className={'flexCenter'} src={post.avatar}/>}
                      title={
                          <Flex justify={'space-between'} align={'center'}>
                              <div>
                                  <span>{post.name}</span>
                                  <span>
                                      <Button type="link" size="small" style={{marginLeft: 8}}>
                                        follow
                                      </Button>
                                  </span>
                              </div>
                              {closeButton && <div>
                                  <Button onClick={handleClose} icon={<CloseCircleOutlined/>} type={'text'}
                                          size="small"/>
                              </div>}
                          </Flex>
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
                    {/*dangerouslySetInnerHTML={{__html: post.content}}*/}
                    {/*<div className={'post-content '}>{parse(purePost)}</div>*/}
                </Paragraph>

                <Divider style={{margin: "5px 0"}}/>
                <Row justify={'space-evenly'} align={'middle'}>
                    <Col span={6}>
                        <Button size={'large'} style={{width: '100%'}} type="text"
                                icon={<LikeOutlined/>}>
                            Like
                        </Button>
                    </Col>
                    <Col span={6}>
                        <Button size={'large'} style={{width: '100%'}} type="text"
                                icon={<SaveOutlined/>}>Save</Button>
                    </Col>
                    <Col span={6}>
                        <Button size={'large'} style={{width: '100%'}} type="text"
                                icon={<CommentOutlined/>} onClick={toggleComments}>
                            Comment
                        </Button>
                    </Col>
                    <Col span={6}>
                        <Button size={'large'} style={{width: '100%'}} type="text"
                                icon={<SendOutlined/>}>
                            Send
                        </Button>
                    </Col>
                </Row>
                {showComments && (<Comments/>)}
            </Card>

        </div>
    )


};


export default Post;


/*<Card className={'card'}>
actions={[
                    <Button icon={<LikeOutlined/>} type="text">{post.likes}</Button>,
                    <Button icon={<CommentOutlined/>} type="text" onClick={toggleComments}/>,
                    <Button icon={<SendOutlined/>} type="text">Send</Button>,
                ]}
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
