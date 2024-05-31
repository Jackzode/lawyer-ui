import React from 'react';
import { Row, Col, Typography, Divider } from 'antd';
import './index.css'
import {FacebookOutlined, GoogleOutlined, LinkedinOutlined, TwitterOutlined} from "@ant-design/icons";


const { Link, Text } = Typography;

const helpCenter = ['隐私保护指引', '申请开通机构号', '联系我们']
const reportCenter = ['涉未成年举报', '网络谣言举报', '涉企侵权举报', '更多']
const aboutLawyer = ['下载', '招聘', '指南', '协议', '更多']
/*
* About
Accessibility
Help Center
Privacy & Terms
Ad Choices


* */
const SiteInfo = () => {
    return (
        <div style={{
            padding: '20px 0',
            backgroundColor: '#f8f8f8',
            textAlign: 'center',
            borderTop: '1px solid #e8e8e8'
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
            <Row justify="center">
                <Col>
                    <Text type="secondary">
                        <span style={{fontWeight: 'bold'}}>Linkedin</span>
                        LinkedIn Corporation © 2024
                    </Text>
                </Col>
            </Row>
            <Divider/>
            <div className='social'>
                <GoogleOutlined className='icon'/>
                <FacebookOutlined className='icon'/>
                <TwitterOutlined className='icon'/>
                <LinkedinOutlined className='icon'/>
            </div>
        </div>

    )
}

export default SiteInfo