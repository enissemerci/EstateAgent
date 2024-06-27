import React from 'react';
import { Form, Input, InputNumber, Button, message } from 'antd';
import axios from 'axios';
import "../style/HomeForm.css"
const HomeForm = () => {
  const onFinish = (values) => {
    axios.post('http://localhost:5001/evler', values)
      .then(() => {
        message.success('Ev başarıyla eklendi!');
      })
      .catch(() => {
        message.error('Bir hata oluştu!');
      });
  };

  return (
    <Form name="HomeForm" onFinish={onFinish} layout="vertical">
      <Form.Item name="name" label="Ev Adı" rules={[{ required: true, message: 'Ev adını giriniz!' }]}>
        <Input className='input'/>
      </Form.Item>
      <Form.Item name="price" label="Fiyat" rules={[{ required: true, message: 'Fiyatı giriniz!' }]}>
        <InputNumber style={{ width: '100%' }} className='input'/>
      </Form.Item>
      <Form.Item name="odaSayisi" label="Oda Sayısı" rules={[{ required: true, message: 'Oda sayısını giriniz!' }]}>
        <InputNumber className='input' />
      </Form.Item>
      <Form.Item name="metrekare" label="Metrekare" rules={[{ required: true, message: 'Metrekareyi giriniz!' }]}>
        <InputNumber className='input' />
      </Form.Item>
      <Form.Item name="adres" label="Adres" rules={[{ required: true, message: 'Adresi giriniz!' }]}>
        <Input className='input'/>
      </Form.Item>
      <Form.Item name="kat" label="Kat" rules={[{ required: true, message: 'Katı giriniz!' }]}>
        <InputNumber className='input' />
      </Form.Item>
      <Form.Item name="banyoSayisi" label="Banyo Sayısı" rules={[{ required: true, message: 'Banyo sayısını giriniz!' }]}>
        <InputNumber className='input' />
      </Form.Item>
      <Form.Item name="balkonSayisi" label="Balkon Sayısı" rules={[{ required: true, message: 'Balkon sayısını giriniz!' }]}>
        <InputNumber className='input' />
      </Form.Item>
      <Form.Item name="yapimYili" label="Yapım Yılı" rules={[{ required: true, message: 'Yapım yılını giriniz!' }]}>
        <InputNumber className='input' />
      </Form.Item>
      <Form.Item name="isitmaTipi" label="Isıtma Tipi" rules={[{ required: true, message: 'Isıtma tipini giriniz!' }]}>
        <Input className='input'/>
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Ekle
        </Button>
      </Form.Item>
    </Form>
  );
};

export default HomeForm;
