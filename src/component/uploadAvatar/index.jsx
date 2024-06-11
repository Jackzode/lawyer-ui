import React from 'react';
import {Button, Upload, message} from 'antd';
import ImgCrop from 'antd-img-crop';
import {UploadOutlined} from "@ant-design/icons";


const UploadAvatar = () => {

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

    const onChange = () => {
        //upload to s3
        //update sql
    };

    return (
        <ImgCrop rotationSlider>
            <Upload
                action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
                maxCount={1}
                showUploadList={false}
                onChange={onChange}
                beforeUpload={beforeUpload}
            >
                <Button type={'text'} icon={<UploadOutlined />}>Upload</Button>
            </Upload>
        </ImgCrop>
    );
};
export default UploadAvatar;