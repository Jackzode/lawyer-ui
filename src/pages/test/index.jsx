import React from 'react';
import { Form, Input, Button, Radio, DatePicker, Select, Upload, Avatar } from 'antd';
import { UploadOutlined, UserOutlined } from '@ant-design/icons';
import './index.css';

const { Option } = Select;

const ProfileForm = () => {
    return (
        <div className="profile-form-container">
            <Form layout="vertical">
                <div className="profile-avatar">
                    <Avatar size={100} icon={<UserOutlined />} />
                    <Upload>
                        <Button icon={<UploadOutlined />} className="upload-button">Upload</Button>
                    </Upload>
                </div>
                <Form.Item label="昵称" name="nickname">
                    <Input placeholder="jackzhi" />
                </Form.Item>
                <Form.Item label="性别" name="gender">
                    <Radio.Group>
                        <Radio value="male">男性</Radio>
                        <Radio value="female">女性</Radio>
                    </Radio.Group>
                </Form.Item>
                <Form.Item label="生日" name="birthday">
                    <DatePicker style={{ width: '100%' }} />
                </Form.Item>
                <Form.Item label="现居地" name="location">
                    <Select placeholder="北京">
                        <Option value="北京">北京</Option>
                        <Option value="上海">上海</Option>
                        <Option value="广州">广州</Option>
                        <Option value="深圳">深圳</Option>
                    </Select>
                </Form.Item>
                <Form.Item label="个人介绍" name="introduction">
                    <Input.TextArea placeholder="关于你的个性，兴趣或经验..." maxLength={100} showCount />
                </Form.Item>
                <Form.Item label="个人网站" name="website">
                    <Input placeholder="你个人网站，博客或作品集等" />
                </Form.Item>
                <Form.Item label="GitHub" name="github">
                    <Input placeholder="用户名" />
                </Form.Item>
                <Form.Item label="就读学校" name="school">
                    <Input placeholder="华中科技大学" />
                </Form.Item>
                <Form.Item label="所在公司" name="company">
                    <Input placeholder="最近工作公司" />
                </Form.Item>
                <Form.Item label="职位" name="position">
                    <Input placeholder="你的职位" />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        保存
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default ProfileForm;
