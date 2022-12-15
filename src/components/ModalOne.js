import React, { useState } from "react";
import { Form, Button, Modal, Input } from "antd";

const ModalOne = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button type="primary" onClick={() => setOpen(true)}>
        Welcome back
      </Button>
      <Modal
        title="Welcome back"
        open={open}
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
        width={600}
      >
        <label htmlFor="email">Email</label>
        <Form.Item
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <label htmlFor="Password">Password</label>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Please add your password!",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>
      </Modal>
    </>
  );
};
export default ModalOne;
