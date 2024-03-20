import React, {useState} from 'react';
import {Card, Button } from 'antd';
import {EyeOutlined, MessageOutlined, UpOutlined, DownOutlined, DislikeOutlined, LikeOutlined } from '@ant-design/icons';
import "./question.css"
const { Meta } = Card;


const QuestionCard = ({question}) => {

    const [expanded, setExpanded] = useState(false);

    const toggleExpand = () => {
        setExpanded(!expanded);
    };

    return  <Card className={'card'}>
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
        </Card>

};





export default QuestionCard;
