import React from 'react';
import { AreaChartOutlined, EllipsisOutlined, MessageOutlined } from '@ant-design/icons';
import { Avatar, Card } from 'antd';
import "./index.css"


const { Meta } = Card;
const Firm = () => {

    return <>

        <div className={'firmItems'}>
            <Card className={'firmCard'}
                // loading={true}
                cover={
                    <img
                        alt="example"
                        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                    />
                }
                actions={[
                    <MessageOutlined key="chat"/>,
                    <AreaChartOutlined key="detail"/>,
                    <EllipsisOutlined key="ellipsis"/>,
                ]}
            >
                <Meta
                    avatar={<Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8"/>}
                    title="Card title"
                    description="This is the description">

                </Meta>
            </Card>
        </div>

    </>
}
export default Firm;