import React, { useState, useEffect } from 'react';
import { Tabs, Card, List } from 'antd';
import axios from 'axios';  // 假设我们从服务器获取数据


const mockFetchLatestPosts = () => {
    return Promise.resolve([
        {
            id: 1,
            title: "最新文章 1",
            content: "这是最新文章 1 的内容。",
        },
        {
            id: 2,
            title: "最新文章 2",
            content: "这是最新文章 2 的内容。",
        },
        // 添加更多最新文章
    ]);
};

const mockFetchRecommendedPosts = () => {
    return Promise.resolve([
        {
            id: 1,
            title: "推荐文章 1",
            content: "这是推荐文章 1 的内容。",
        },
        {
            id: 2,
            title: "推荐文章 2",
            content: "这是推荐文章 2 的内容。",
        },
        // 添加更多推荐文章
    ]);
};

const BlogTabs = () => {
    const [activeTab, setActiveTab] = useState('1');
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        if (activeTab === '1') {
            mockFetchLatestPosts().then(
                (res) => {
                    console.log(res);
                    setPosts(res);
                }
            );
        } else if (activeTab === '2') {
            mockFetchRecommendedPosts().then(
                (res) => {
                    console.log(res);
                    setPosts(res);
                }
            );
        }
    }, [activeTab]);

    const handleTabChange = (key) => {
        setActiveTab(key);
    };

    const renderPosts = () => (
        <List
            dataSource={posts}
            renderItem={post => (
                <List.Item key={post.id}>
                    <Card title={post.title}>
                        {post.content}
                    </Card>
                </List.Item>
            )}
        />
    );

    const items = [
        {
            key: '1',
            label: 'Newest',
            children: renderPosts(),
        },
        {
            key: '2',
            label: 'Recommended',
            children: renderPosts(),
        },
    ];

    return (
        <Tabs items={items} onChange={handleTabChange} activeKey={activeTab}>
        </Tabs>
    );
};

export default BlogTabs;
