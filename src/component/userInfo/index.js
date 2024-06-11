import React, {useEffect, useState} from 'react';
import {Form, Input, Button, Cascader, message, DatePicker} from 'antd';
import './index.css';
import {CITYLIST} from "@/data/const";
import {useParams} from "react-router-dom";
import {updateProfile} from "@/apis/user";










const UserInfo = () => {

    const params = useParams();
    const [profile, setProfile] = useState({});
    // useEffect(()=>{
    //     getProfileByNameAPI(params).then(
    //         response => {
    //             setProfile(response.data);
    //         }
    //     ).catch(error => {
    //         console.log(error);
    //     })
    // }, [])

    const saveProfile = (value) => {
        console.log(value);
        updateProfile(value).then(
            message.success('update profile successfully'),
        ).catch(
            message.error('update profile failed')
        )
    }

    return (
        <div className="profile-form-container">
            <Form layout="vertical"
                onFinish={saveProfile}
            >
                <Form.Item label="Username" name="username">
                    <Input placeholder={profile.username} />
                </Form.Item>
                <Form.Item label="Description" name="description">
                    <Input placeholder={profile.description} />
                </Form.Item>
                <Form.Item label="First name" name="first_name">
                    <Input placeholder={profile.firstName} />
                </Form.Item>
                <Form.Item label="Last name" name="last_name">
                    <Input placeholder={profile.lastName} />
                </Form.Item>
                <Form.Item label="Birthday" name="birthday">
                    <DatePicker style={{ width: '100%' }}  />
                </Form.Item>
                <Form.Item label="Location" defaultValue={profile.location} >
                    <Cascader
                        options={CITYLIST}
                    />
                </Form.Item>
                <Form.Item label="Website" name="website">
                    <Input placeholder={profile.description} />
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

export default UserInfo;
