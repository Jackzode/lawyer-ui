import React from 'react';
import {Button, Card, Flex, Form, Input} from 'antd';
import SiteInfo from "@/component/siteInfo/siteInfo";


const Password = () => {

    const onFinish = (values) => {
        console.log('Success:', values);
    };


    return (
        <>
            <Card style={{width: '100%', height: '50%'}} className={'flexCenter'}>
                <Form
                    onFinish={onFinish}
                    name="dependencies"
                    autoComplete="off"
                    style={{
                        width: 300,
                    }}
                    layout="vertical"
                >
                    <Form.Item
                        label="Old Password"
                        name="old_password"
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                    >
                        <Input.Password/>
                    </Form.Item>

                    <Form.Item
                        label="New Password"
                        name="password"
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                    >
                        <Input.Password/>
                    </Form.Item>

                    <Form.Item
                        label="Confirm Password"
                        name="password2"
                        dependencies={['password']}
                        rules={[
                            {
                                required: true,
                            },
                            ({getFieldValue}) => ({
                                validator(_, value) {
                                    if (!value || getFieldValue('password') === value) {
                                        return Promise.resolve();
                                    }
                                    return Promise.reject(new Error('The new password that you entered do not match!'));
                                },
                            }),
                        ]}
                    >
                        <Input.Password/>
                    </Form.Item>
                    <Form.Item style={{textAlign: 'center'}}>
                        <Button style={{width: '100%'}} type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>

                </Form>

            </Card>
            <SiteInfo/>
        </>
    );
};
export default Password;