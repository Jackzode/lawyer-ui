import React, {useEffect, useState} from "react";
import {getHomePageQuestionAPI} from "@/apis/question";
import {message} from "antd";
import PostList from "@/component/postlist";


const ContainerHeight = 800;

const History = () => {

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
            <PostList data={data}  />
        </div>
    );
};
export default History;