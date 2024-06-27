import React from 'react';
import { Form, Input, InputNumber, Button, Row, Col } from 'antd';
import { SelectCriteria } from './SelectCriteria';


export const CategorizeForm = ({ onFinish }) => {
  return (
    <Form layout="vertical" onFinish={onFinish}>
    <Row gutter={16}>
      <Col span={8}>
        <Form.Item name="odaSayisi" label="Oda Sayısı">
          <InputNumber min={1} max={10} style={{ width: '100%' }} />
        </Form.Item>
        <SelectCriteria name="odaSayisiKriter" label="Oda Sayısı Kriter" />

        <Form.Item name="adres" label="Adres">
          <Input />
        </Form.Item>
        <SelectCriteria name="adresKriter" label="Adres Kriter" />

        <Form.Item name="isitmaTipi" label="Isıtma Tipi">
          <Input />
        </Form.Item>
        <SelectCriteria name="isitmaTipiKriter" label="Isıtma Tipi Kriter" />
      </Col>

      <Col span={8}>
        <Form.Item name="fiyat" label="Fiyat">
          <InputNumber min={1} style={{ width: '100%' }} />
        </Form.Item>
        <SelectCriteria name="fiyatKriter" label="Fiyat Kriter" />

        <Form.Item name="metrekare" label="Metrekare">
          <InputNumber min={1} style={{ width: '100%' }} />
        </Form.Item>
        <SelectCriteria name="metrekareKriter" label="Metrekare Kriter" />

        <Form.Item name="kat" label="Kat">
          <InputNumber min={1} max={10} style={{ width: '100%' }} />
        </Form.Item>
        <SelectCriteria name="katKriter" label="Kat Kriter" />
      </Col>

      <Col span={8}>
        <Form.Item name="banyoSayisi" label="Banyo Sayısı">
          <InputNumber min={1} max={10} style={{ width: '100%' }} />
        </Form.Item>
        <SelectCriteria name="banyoSayisiKriter" label="Banyo Sayısı Kriter" />

        <Form.Item name="balkonSayisi" label="Balkon Sayısı">
          <InputNumber min={1} max={10} style={{ width: '100%' }} />
        </Form.Item>
        <SelectCriteria name="balkonSayisiKriter" label="Balkon Sayısı Kriter" />

        <Form.Item name="yapimYili" label="Yapım Yılı">
          <InputNumber min={1900} max={new Date().getFullYear()} style={{ width: '100%' }} />
        </Form.Item>
        <SelectCriteria name="yapimYiliKriter" label="Yapım Yılı Kriter" />
      </Col>
    </Row>
    <Form.Item>
      <Button type="primary" htmlType="submit">
        Ara
      </Button>
    </Form.Item>
  </Form>
  )
}
