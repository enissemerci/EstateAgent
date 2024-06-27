import React from "react";
import { Form, Radio } from "antd";
export const SelectCriteria = ({ name, label }) => {
  return (
    <Form.Item label={label} style={{ marginBottom: 0 }}>
      <Form.Item
        name={name}
        style={{ display: "inline-block", width: "calc(50% - 8px)" }}
      >
        <Radio.Group initialvalue="olmasaDaOlur">
          <Radio value="mutlakaOlsun">Mutlaka Olsun</Radio>
          <Radio value="mutlakaOlmasin">Mutlaka Olmasın</Radio>
          <Radio value="olmasaDaOlur">Olsa da Olur, Olmasa da Olur</Radio>
        </Radio.Group>
      </Form.Item>
    </Form.Item>
  );
};
