import React, {useEffect, useRef, useState} from 'react';
import {Card, Flex, Pagination, Skeleton} from 'antd';
import Post from "@/component/post";
import {getPersonalQuestionsAPI} from "@/apis/question";
import {useLocation} from "react-router-dom";








const History = () => {

    const [history, setHistory] = useState([]);
    const [page, setPage] = useState(1);
    const [pageSize, setPageSize] = useState(10);
    const [total, setTotal] = useState(1);
    const [loading, setLoading] = useState(false);

    const location = useLocation()
    const username = location.state.username

    useEffect(() => {
        getPersonalQuestionsAPI(page, pageSize, username).then(
            response => {
                setHistory(response.data.list);
                setTotal(response.data.count)
                setLoading(false)
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
                    <Skeleton key={item.id} active loading={loading}>
                        <Card style={{ marginBottom: '0.7rem' }} >
                            <Post  closeButton={false} post={item}/>
                        </Card>
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