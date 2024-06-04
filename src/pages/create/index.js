import React, {useState} from 'react';
import {Editor} from '@tinymce/tinymce-react';
import {Button, Card, Flex, Form, Input, message, Select, Radio} from "antd";
const { Option } = Select;

const MyForm = () => {


    const [editorContent, setEditorContent] = useState('');

    const onFinish = (values) => {
        console.log('Form values:', values);
        console.log('Editor content:', editorContent);
        message.success('Form submitted successfully');
    };
    return (
        <Form
            layout="vertical"
            onFinish={onFinish}
            style={{width: '1000px'}}
        >
            <Flex>
                <Form.Item style={{width: '800px', marginRight: '20px'}}>
                    <Editor
                        apiKey='982gfbm5v9ur4d05xjmtfphxoz4xgo1tyfwte508gknm8u5t'
                        // onInit={(_evt, editor) => editorRef.current = editor}
                        initialValue="<p>This is the initial content of the editor.</p>"
                        init={{
                            plugins: 'anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount checklist mediaembed casechange export formatpainter pageembed linkchecker a11ychecker tinymcespellchecker permanentpen powerpaste advtable advcode editimage advtemplate tableofcontents footnotes mergetags autocorrect typography inlinecss markdown',
                            toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat',
                            tinycomments_mode: 'embedded',
                            tinycomments_author: 'Author name',
                            mergetags_list: [
                                {value: 'First.Name', title: 'First Name'},
                                {value: 'Email', title: 'Email'},
                            ],
                        }}
                        onEditorChange={(content) => setEditorContent(content)}
                    />
                </Form.Item>
                <Flex vertical style={{width: '240px'}}>
                    <Card style={{marginBottom: '10px'}}>
                        <Form.Item label="copyright" name="copyright" style={{marginBottom: '5px'}}>
                            <Select>
                                <Option value="0">none</Option>
                                <Option value="1">no.1</Option>
                                <Option value="2">no.2</Option>
                            </Select>
                        </Form.Item>
                        <Form.Item label="introduce in one word" name="introduction" style={{marginBottom: '5px'}}>
                            <Input suffix={<a href="/">edit</a>}/>
                        </Form.Item>

                        <Form.Item label="Allow Reprint" name="reprint" style={{marginBottom: '5px'}}>
                            <Select>
                                <Option value="0">no</Option>
                                <Option value="1">yes</Option>
                            </Select>
                        </Form.Item>
                        <Form.Item label="Allow Comment" name="comments" style={{marginBottom: '5px'}}>
                            <Select>
                                <Option value="1">anyone</Option>
                                <Option value="0">my follower</Option>
                            </Select>
                        </Form.Item>
                        <Form.Item label="Feeds to Follower" style={{marginBottom: '0px'}}>
                            <Radio.Group >
                                <Radio value="open">open</Radio>
                                <Radio value="close">close</Radio>
                            </Radio.Group>
                        </Form.Item>
                    </Card>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" style={{width: '100%'}}>
                            Submit
                        </Button>
                    </Form.Item>
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