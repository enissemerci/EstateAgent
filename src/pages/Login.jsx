import React, { useState } from "react";
import { Form, Input, Button, message } from "antd";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import image from "../assets/image2.jpeg"

const Login = ({ setLoggedIn }) => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onFinish = (values) => {
    setLoading(true);
    axios
      .get("http://localhost:5001/kullanicilar")
      .then((response) => {
        const user = response.data.find(
          (user) =>
            user.username === values.username &&
            user.password === values.password
        );
        if (user) {
          message.success("Giriş başarılı!");
          setLoggedIn(true);
          navigate('/evler');
        } else {
          message.error("Geçersiz kullanıcı adı veya şifre");
        }
      })
      .catch((error) => {
        message.error("Bir hata oluştu");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div style={{
      backgroundImage: `url(${image})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      width:"100vw",
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      margin: 0,
      padding: 0
    }}>
      <Form name="login" onFinish={onFinish} style={{ background: 'rgba(255, 255, 255, 0.8)', padding: '20px', borderRadius: '10px' }}>
        <Form.Item
          name="username"
          rules={[{ required: true, message: "Kullanıcı adınızı giriniz!" }]}
          style={{ width: "200px" }}
        >
          <Input placeholder="Kullanıcı Adı" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: "Şifrenizi giriniz!" }]}
          style={{ width: "200px" }}
        >
          <Input.Password placeholder="Şifre" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" loading={loading}>
            Giriş Yap
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;
