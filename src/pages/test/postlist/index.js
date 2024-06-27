import React, {useEffect, useState} from 'react';
import {List, message} from 'antd';
import VirtualList from 'rc-virtual-list';
import Post from "@/component/post";
import {getQuestionAPI} from "@/apis/question";


const ContainerHeight = 800;


const PostList = () => {

    const [data, setData] = useState([]);

    const appendData = () => {

        getQuestionAPI().then(
            response => {
                setData((prev) => [...prev, ...response.data]);
            },
        ).catch(
            error => {
                console.log(error);
                message.error("sorry, internal error")
            }
        )
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
