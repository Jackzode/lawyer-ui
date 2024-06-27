import React, {useEffect} from 'react';
import {Button, Cascader, DatePicker, Form, Input, message} from 'antd';
import './index.css';
import {CITYLIST} from "@/data/data";
import {useOutletContext} from 'react-router-dom';
import {getProfileByTokenApi, updateProfile} from "@/apis/user";
import moment from "moment";
import {getCityIdByName, getLocationPath} from '@/utils/city'


const UserInfo = () => {


    const {updatePersonalInfo} = useOutletContext();
    const [form] = Form.useForm()
    useEffect(() => {
        getProfileByTokenApi().then(
            response => {
                if (response.code === 0) {
                    // setProfile(response.data);
                    if (response.data.birthday){
                        response.data.birthday = moment.unix(response.data.birthday);
                        response.data.location = getLocationPath(response.data.city_id)
                    }
                    form.setFieldsValue({
                        ...response.data,
                    });
                } else {
                    throw new Error('get info failed')
                }
            }
        ).catch(error => {
            console.log(error);
            message.error("get info failed")
        })
    }, [form])

    const saveProfile = (value) => {
        if (value.birthday) {
            value.birthday = value.birthday.format("YYYY-MM-DD");
        }
        // 获取城市ID
        if (value.location) {
            value.cityId = value.location[value.location.length - 1]
            delete value.location; // 删除location字段，因为我们只需要城市ID
        }
        console.log("save-input-after--", value)
        updateProfile(value).then(
            response => {
                if (response.code === 0) {
                    updatePersonalInfo()
                    // setProfile(value);
                    message.success('update profile successfully')
                } else {
                    throw new Error('update profile failed')
                }
            }
        ).catch(
            err => {
                console.log(err);
                message.error('update profile failed')
            }
        )
    }

    return (
        <div className="profile-form-container">
            <Form layout="vertical"
                  onFinish={saveProfile}
                  form={form}
            >
                <Form.Item label="Username" name="username" rules={[
                    {
                        required: true,
                        message: 'username is required',
                    },
                ]}>
                    <Input/>
                </Form.Item>
                <Form.Item label="Description" name="description">
                    <Input />
                </Form.Item>
                <Form.Item label="First name" name="firstname">
                    <Input/>
                </Form.Item>
                <Form.Item label="Last name" name="lastname">
                    <Input/>
                </Form.Item>
                <Form.Item label="Birthday" name="birthday">
                    <DatePicker style={{width: '100%'}}/>
                </Form.Item>
                <Form.Item label="Location" name="location">
                    <Cascader
                        options={CITYLIST}
                    />
                </Form.Item>
                <Form.Item label="Website" name="website">
                    <Input/>
                </Form.Item>
                <Form.Item label="GitHub" name="github">
                    <Input/>
                </Form.Item>
                <Form.Item label="School" name="school">
                    <Input/>
                </Form.Item>
                <Form.Item label="Company" name="company">
                    <Input/>
                </Form.Item>
                <Form.Item label="Position" name="position">
                    <Input/>
                </Form.Item>
                <Form.Item className={"flexCenter"}>
                    <Button type="primary" htmlType="submit">
                        Update
                    </Button>
                </Form.Item>
            </Form>

        </div>
    );
};

export default UserInfo;
