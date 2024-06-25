import React, {useEffect, useRef, useState} from 'react';
import {Flex, Pagination, Skeleton} from 'antd';
import Post from "@/component/post";
import {getQuestionAPI} from "@/apis/question";








const History = () => {
    //问题列表数据
    const [history, setHistory] = useState([]);
    const [page, setPage] = useState(1);
    const [pageSize, setPageSize] = useState(10);
    const [total, setTotal] = useState(1);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        getQuestionAPI(page, pageSize).then(
            response => {
                console.log("response.data--", response.data);
                setHistory(response.data);
                setLoading(false)
                setTotal(250)
            }
        ).catch(
            error => {
                console.log(error);
            }
        )
    }, [page, pageSize]);

    const onPageChange = (current, pageSize) => {
        console.log(current, pageSize);
        setPage(page);
        setPageSize(pageSize);
    };

    return (
        <>
            <div>
                {history.map(item => (
                    <Skeleton active loading={loading}>
                        <Post key={item.id} closeButton={false} post={item}/>
                    </Skeleton>
                ))}
                <div style={{marginBottom: '50px'}}>
                    <Flex justify={'center'}>
                        <Pagination
                            onChange={onPageChange}
                            total={total}
                        />
                    </Flex>
                </div>
            </div>
        </>
    )
}


export default History;