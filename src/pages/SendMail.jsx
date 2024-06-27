import React, { useState } from 'react';
import { Form, Input, Button, message } from 'antd';

const SendMail = ({ evler }) => {
  const [submitted, setSubmitted] = useState(false);

  const onFinish = (values) => {
    setTimeout(() => {
      message.warning({
        content: 'Mail gönderildi',
        style: {
          marginTop: '20vh',
        },
        duration: 2, 
      });
      setSubmitted(false); 
    }, 1000);

    setSubmitted(true);
  };

  return (
    <Form name="mailGonder" onFinish={onFinish} layout="vertical">
      <Form.Item name="email" label="Email" rules={[{ required: true, message: 'Email adresinizi giriniz!' }]}>
        <Input />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Mail Gönder
        </Button>
      </Form.Item>
    </Form>
  );
};

export default SendMail;
