import React, {useEffect, useState} from 'react';
import {List, message} from 'antd';
import VirtualList from 'rc-virtual-list';
import Post from "@/component/post";
import {getHomePageQuestionAPI} from "@/apis/question";


const ContainerHeight = 800;


const PostList = () => {

    const [data, setData] = useState([]);

    const appendData = () => {
        const body = getHomePageQuestionAPI()
        const newdata = data.concat(body)
        setData(newdata);
        message.success(`${body.length} more items loaded!`);
    };
    useEffect(() => {
        appendData();
    }, []);
    console.log(data)
    const onScroll = (e) => {
        if (Math.abs(e.currentTarget.scrollHeight - e.currentTarget.scrollTop - ContainerHeight) <= 1) {
            appendData();
        }
    };
    return (
        <div>
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
                        <List.Item key={item.id} onClick={(e) => (console.log(e))}>
                            <Post closeButton={false} post={item}/>
                        </List.Item>
                    )}
                </VirtualList>
            </List>

        </div>
    );
};
export default PostList;