import React, {useEffect, useState} from 'react';
import {Avatar, Button, Card, List, message} from 'antd';
import VirtualList from 'rc-virtual-list';
import Post from "@/component/post";
import {getHomePageQuestionAPI} from "@/apis/question";
import Meta from "antd/es/card/Meta";


const fakeDataUrl =
    'https://randomuser.me/api/?results=20&inc=name,gender,email,nat,picture&noinfo';
const ContainerHeight = 400;


const HistoryItem = ({item}) => {

    const [isExpanded, setIsExpanded] = useState(false);
    const toggleExpansion = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <Card style={{marginBottom: 10, width: '100%'}} hoverable={true}>
            <Meta style={{marginBottom: '10px'}}
                  avatar={<Avatar className={'flexCenter'} src={item.avatar}/>}
                  title={item.name}
            />
            <div className={'post-content ' + (isExpanded ? '' : 'truncate-text')}
                 dangerouslySetInnerHTML={{__html: item.content}}/>
            {!isExpanded && <Button type={"text"} onClick={toggleExpansion}>see more</Button>}

        </Card>
    )
}

const PostHistory = () => {

    const [data, setData] = useState([]);
    const appendData = () => {
        const body = getHomePageQuestionAPI()
        setData(data.concat(body));
        message.success(`${body.length} more items loaded!`);
    };
    useEffect(() => {
        appendData();
    }, []);
    const onScroll = (e) => {
        // Refer to: https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollHeight#problems_and_solutions
        if (Math.abs(e.currentTarget.scrollHeight - e.currentTarget.scrollTop - ContainerHeight) <= 1) {
            appendData();
        }
    };
    return (
        <div>
            <div>
                <h2>history articles</h2>
            </div>
            <br/>
            <List size={"large"}>
                <VirtualList
                    data={data}
                    height={ContainerHeight}
                    itemHeight={47}
                    itemKey="email"
                    onScroll={onScroll}
                >
                    {(item) => (
                        <List.Item key={item.email} onClick={(e) => (console.log(e))}>
                            <HistoryItem item={item}/>
                        </List.Item>
                    )}
                </VirtualList>
            </List>

        </div>
    );
};
export default PostHistory;