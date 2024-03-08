import React from 'react';
import { Form, Input, Button } from 'antd';
import './ContactUsPage.css';
import TopBarDropdown from '../../components/TopBarDropdown';
import logo from '../../assets/img/logo.svg';

function ContactUsPage() {

    const onFinish = (values) => {
        console.log('Received values of form:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div className="contact-page">
            <TopBarDropdown />
            <div className="logo-section">
                <img src={logo} alt="Logo" />
            </div>
            <br/>
            <div className="contact-form-container">
            <h1 className="contact-title">Contact Us</h1>

                <Form
                    name="contact_form"
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    layout="vertical"
                    className="contact-form"
                >
                    <Form.Item
                        name="message"
                        label="Leave us a message:"
                        className="form-item-message"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your message!',
                            },
                        ]}
                    >
                        <Input.TextArea className="message-textarea" />
                    </Form.Item>
                    <Form.Item className="form-item-submit">
                        <Button type="primary" htmlType="submit" className="submit-button">
                            SEND
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
}

export default ContactUsPage;
