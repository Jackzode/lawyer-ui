import React, {useState} from 'react';
import {Form, Input, Button, Radio, DatePicker, Upload, Cascader, message} from 'antd';
import {LoadingOutlined, PlusOutlined} from '@ant-design/icons';
import './index.css';
import {CITYLIST} from "@/data/const";


const getBase64 = (img, callback) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
};

const beforeUpload = (file) => {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
        message.error('You can only upload JPG/PNG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
        message.error('Image must smaller than 2MB!');
    }
    return isJpgOrPng && isLt2M;
};

const UpLoadAvatar = () => {

    const [loading, setLoading] = useState(false);
    const [imageUrl, setImageUrl] = useState();
    const handleChange = (info) => {
        if (info.file.status === 'uploading') {
            setLoading(true);
            return;
        }
        if (info.file.status === 'done') {
            // Get this url from response in real world.
            getBase64(info.file.originFileObj, (url) => {
                setLoading(false);
                setImageUrl(url);
            });
        }
    };

    const uploadButton = (
        <button
            style={{
                border: 0,
                background: 'none',
            }}
            type="button"
        >
            {loading ? <LoadingOutlined /> : <PlusOutlined />}
            <div
                style={{
                    marginTop: 8,
                }}
            >
                Upload
            </div>
        </button>
    );
    return (
        <Upload
            name="avatar"
            listType="picture-card"
            className="avatar-uploader"
            showUploadList={false}
            action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
            beforeUpload={beforeUpload}
            onChange={handleChange}
        >
            {imageUrl ? (
                <img
                    src={imageUrl}
                    alt="avatar"
                    style={{
                        width: '100%',
                    }}
                />
            ) : (
                uploadButton
            )}
        </Upload>
    )
}






const ProfileForm = ({profile}) => {



    return (
        <div className="profile-form-container">
            <Form layout="vertical">
                <div className="profile-avatar">
                    <UpLoadAvatar/>
                </div>
                <Form.Item label="Nickname" name="nickname">
                    <Input placeholder="..." />
                </Form.Item>
                <Form.Item label="Gender" name="gender">
                    <Radio.Group>
                        <Radio value="male">男性</Radio>
                        <Radio value="female">女性</Radio>
                    </Radio.Group>
                </Form.Item>
                <Form.Item label="Birthday" name="birthday">
                    <DatePicker style={{ width: '100%' }} />
                </Form.Item>
                <Form.Item label="Location">
                    <Cascader
                        options={CITYLIST}
                    />
                </Form.Item>
                <Form.Item label="Introduction" name="introduction">
                    <Input.TextArea  maxLength={100} showCount />
                </Form.Item>
                <Form.Item label="Website" name="website">
                    <Input />
                </Form.Item>
                <Form.Item label="GitHub" name="github">
                    <Input  />
                </Form.Item>
                <Form.Item label="School" name="school">
                    <Input />
                </Form.Item>
                <Form.Item label="Company" name="company">
                    <Input />
                </Form.Item>
                <Form.Item label="Position" name="position">
                    <Input  />
                </Form.Item>
                <Form.Item className={"flexCenter"}>
                    <Button type="primary" htmlType="submit">
                        Save
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default ProfileForm;
