import React, {useEffect, useRef, useState} from 'react';
import {Flex, Pagination, Skeleton} from 'antd';
import Post from "@/component/post";
import {getSaves} from "@/apis/save";








const Saved = () => {
    //问题列表数据
    const [saves, setSaves] = useState([]);
    const [page, setPage] = useState(1);
    const [pageSize, setPageSize] = useState(1);
    const [total, setTotal] = useState(1);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setSaves(getSaves(page, pageSize));
        setLoading(false)
        setTotal(250)
    }, [page, pageSize]);

    const onPageChange = (current, pageSize) => {
        console.log(current, pageSize);
        setPage(page);
        setPageSize(pageSize);
    };

    return (
        <>
            <div>
                {saves.map(item => (
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


export default Saved;