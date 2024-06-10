import React, {useEffect, useState} from "react";
import {getHomePageQuestionAPI} from "@/apis/question";
import Post from "@/component/post";



const Collection = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        setData(getHomePageQuestionAPI());
    }, []);

    return (
        <div>
            {data.map((item)=>(
                <Post closeButton={false} post={item}/>
            ))}
        </div>
    )
}

export default Collection