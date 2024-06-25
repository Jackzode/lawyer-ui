import React, {useState, useEffect, useRef} from 'react';
import ReactQuill from 'react-quill';
import {Button, Card, Flex, Form, Input, message, Select, Radio} from "antd";
import 'react-quill/dist/quill.snow.css';
import {addQuestion} from "@/apis/question";
import {useNavigate} from "react-router-dom";


const {Option} = Select;

const MyForm = () => {


    const [editorContent, setEditorContent] = useState('');
    const navigate = useNavigate()
    const onFinish = (values) => {
        console.log('Editor content:', editorContent);
        values.content = editorContent;
        console.log('Form values:', values);
        addQuestion(values).then((res) => {
            if (res.code === 0) {
                message.success('post successfully');
                navigate('/')
            }else{
                throw new Error("post failed")
            }
        }).catch(
            (error) => {
                console.log(error)
            }
        )
    };
    return (

        <Form
            layout="vertical"
            onFinish={onFinish}
            style={{width: '55rem', height: 'auto'}}
        >
            <Flex>
                <Form.Item style={{width: '800px', marginRight: '20px'}}>
                    <ReactQuill
                        theme="snow"
                        style={{height: '30rem'}} // 直接设置高度
                        onChange={(content) => {
                            setEditorContent(content)
                        }}
                        modules={{
                            toolbar: [
                                [{'header': [1, 2, false]}],
                                ['bold', 'italic', 'underline', 'strike', 'blockquote'],
                                [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
                                ['link', 'image'],
                                ['clean']
                            ],
                        }}
                        formats={[
                            'header',
                            'bold', 'italic', 'underline', 'strike', 'blockquote',
                            'list', 'bullet', 'indent',
                            'link', 'image'
                        ]}
                    >
                        {/*<div style={{height: '500px'}}></div>*/}
                    </ReactQuill>
                </Form.Item>

                <Flex vertical style={{width: '20rem'}}>
                    <Card>
                        <Form.Item label="copyright" name="copyright"
                                   rules={[
                                       {
                                           required: true,
                                       },
                                   ]}
                        >
                            <Select defaultValue={'0'}>
                                <Option value='0' >None</Option>
                                <Option value='1'>No.1</Option>
                                <Option value="2">No.2</Option>
                            </Select>
                        </Form.Item>
                        <Form.Item label="introduce in one word" name="introduction"
                                   rules={[
                                       {
                                           required: true,
                                       },
                                   ]}
                        >
                            <Input/>
                        </Form.Item>

                        <Form.Item label="Allow Reprint" name="reprint"
                                   rules={[
                                       {
                                           required: true,
                                       },
                                   ]}
                        >
                            <Select defaultValue={'1'}>
                                <Option value="0">No</Option>
                                <Option value="1">Yes</Option>
                            </Select>
                        </Form.Item>
                        <Form.Item label="Allow Comment" name="comments"
                                   rules={[
                                       {
                                           required: true,
                                       },
                                   ]}
                        >
                            <Select defaultValue={'1'}>
                                <Option value="1">Anyone</Option>
                                <Option value="0">Follower</Option>
                            </Select>
                        </Form.Item>
                        <Form.Item label="Feeds to Follower" >
                            <Radio.Group defaultValue={'open'}>
                                <Radio value="open" >Open</Radio>
                                <Radio value="close">Close</Radio>
                            </Radio.Group>
                        </Form.Item>

                        <Form.Item>
                            <Button type="primary" htmlType="submit" style={{width: '100%'}}>
                                Submit
                            </Button>
                        </Form.Item>
                    </Card>
                </Flex>

            </Flex>
        </Form>

    )
}


const Create = () => {
    return (
        <Flex justify={'center'} style={{marginTop: '24px'}}>
            <Flex>
                <MyForm/>
            </Flex>
        </Flex>
    )
}
export default Create