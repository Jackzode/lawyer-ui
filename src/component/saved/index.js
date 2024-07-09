import React, {useEffect, useState} from 'react';
import {Card, Flex, Pagination, Skeleton} from 'antd';
import Post from "@/component/post";
import {getPersonalCollection} from "@/apis/question";









const Saved = () => {
    //问题列表数据
    const [saves, setSaves] = useState([]);
    const [page, setPage] = useState(1);
    const [pageSize, setPageSize] = useState(10);
    const [totalCount, setTotalCount] = useState(1);
    const [loading, setLoading] = useState(false);



    useEffect(() => {
        getPersonalCollection(page, pageSize).then(
            response => {
                setSaves(response.data.list);
                setTotalCount(response.data.count)
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
        setPage(current);
        setPageSize(pageSize);
    };

    return (
        <>
            <div>
                {saves.map(item => (
                    <Skeleton key={item.id} active loading={loading}>
                        <Card style={{marginBottom: '0.7rem'}}>
                            <Post  closeButton={false} post={item}/>
                        </Card>
                    </Skeleton>
                ))}
                <div style={{marginBottom: '50px'}}>
                    <Flex justify={'center'}>
                        <Pagination
                            showTotal={(totalCount) => `Total ${totalCount} items`}
                            responsive={true}
                            hideOnSinglePage={true}
                            onChange={onPageChange}
                            total={totalCount}
                        />
                    </Flex>
                </div>
            </div>
        </>
    )
}


export default Saved;