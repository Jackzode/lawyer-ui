import React, {useEffect, useRef, useState} from 'react';
import {Card, Flex, Pagination, Skeleton} from 'antd';
import Post from "@/component/post";
import {getPersonalQuestionsAPI} from "@/apis/question";









const History = () => {

    const [history, setHistory] = useState([]);
    const [page, setPage] = useState(1);
    const [pageSize, setPageSize] = useState(10);
    const [total, setTotal] = useState(1);
    const [loading, setLoading] = useState(false);

    const onPageChange = (current, curPageSize) => {
        setPage(current);
        setPageSize(curPageSize);
    };


    useEffect(() => {
        getPersonalQuestionsAPI(page, pageSize).then(
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