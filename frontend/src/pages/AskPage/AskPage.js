import React from 'react';
import { Form, Input, Button } from 'antd';
import './AskPage.css';
import TopBarDropdown from '../../components/TopBarDropdown';
import logo from '../../assets/img/logo.svg';

function AskPage() {

    const onFinish = (values) => {
        console.log('Received values of form:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div className="inquiry-page">
            <TopBarDropdown />
            <div className="logo-section">
                <img src={logo} alt="Logo" />
            </div>
            <br />
            <div className="inquiry-form-wrapper">
                <h1 className="inquiry-title">Is there something you don’t understand or want to know more about?</h1>

                <Form
                    name="inquiry_form"
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    layout="vertical"
                    className="inquiry-form"
                >
                    <Form.Item
                        name="message"
                        label="Leave us a question:"
                        className="form-item-query"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your message!',
                            },
                        ]}
                    >
                        <Input.TextArea className="query-textarea" />
                    </Form.Item>
                    <Form.Item className="form-item-action">
                        <Button type="primary" htmlType="submit" className="action-button">
                            SEND
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
}

export default AskPage;
