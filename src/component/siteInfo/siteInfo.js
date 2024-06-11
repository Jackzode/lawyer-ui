import React from 'react';
import {Row, Col, Typography, Divider, Flex} from 'antd';
import {FacebookOutlined, GoogleOutlined, LinkedinOutlined, TwitterOutlined} from "@ant-design/icons";


const { Link, Text } = Typography;


const SiteInfo = () => {
    return (
        <div style={{
            padding: '20px 0',
            // backgroundColor: '#f8f8f8',
            textAlign: 'center',
            // borderTop: '1px solid #e8e8e8'
        }}>
            <Row justify="center" gutter={[16, 16]}>
                <Col>
                    <Link to={"#"} style={{color: '#778294'}}>About</Link>
                </Col>
                <Col>
                    <Link to={"#"} style={{color: '#778294'}}>Accessibility</Link>
                </Col>
                <Col>
                    <Link to={"#"} style={{color: '#778294'}}>Help Center</Link>
                </Col>
                <Col>
                    <Link to={"#"} style={{color: '#778294'}}>Privacy & Terms</Link>
                </Col>
                <Col>
                    <Link to={"#"} style={{color: '#778294'}}>Ad Choices</Link>
                </Col>
                <Col>
                    <Link href="#" style={{color: '#778294'}}>Advertising</Link>
                </Col>
                <Col>
                    <Link href="#" style={{color: '#778294'}}>More</Link>
                </Col>
            </Row>
            <Divider/>
            <Flex justify="center">
                <Text type="secondary">
                    <span style={{fontWeight: 'bold'}}>Lawyer &nbsp;</span>
                     Corporation © 2024
                </Text>
            </Flex>
            <Divider/>
            <Flex justify={'space-evenly'}>
                <GoogleOutlined className='icon'/>
                <FacebookOutlined className='icon'/>
                <TwitterOutlined className='icon'/>
                <LinkedinOutlined className='icon'/>
            </Flex>
        </div>

    )
}

export default SiteInfo