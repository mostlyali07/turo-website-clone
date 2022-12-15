import React, { useState } from "react";
import { Form, Button, Modal, Input } from "antd";
import "../App.css";

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
        width={455}
      >
        <Form action="">
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
          <Button type="primary" className="Log_in_btn" block>
            Log In
          </Button>
          <br />
          <br />
          <p className="text-center or">or</p>
          <Button className="btn-threes" block>
            <svg
              width="24px"
              height="24px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              version="1.1"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M15.903 2a4.4 4.4 0 0 1-1.006 3.152 3.7 3.7 0 0 1-2.924 1.383 4.188 4.188 0 0 1 1.033-3.036A4.477 4.477 0 0 1 15.903 2Zm2.043 8.31a4.47 4.47 0 0 0-.582 2.148A4.319 4.319 0 0 0 20 16.431a9.897 9.897 0 0 1-1.371 2.793c-.808 1.209-1.655 2.389-3 2.41-.638.015-1.07-.168-1.52-.36-.469-.2-.957-.408-1.722-.408-.811 0-1.322.215-1.814.422-.426.18-.838.353-1.419.377-1.28.047-2.258-1.29-3.095-2.487-1.673-2.444-2.976-6.888-1.23-9.912a4.8 4.8 0 0 1 4.04-2.464c.726-.015 1.423.265 2.033.51.468.188.884.355 1.226.355.3 0 .705-.16 1.178-.348.743-.295 1.654-.656 2.581-.559a4.575 4.575 0 0 1 3.605 1.949 4.47 4.47 0 0 0-1.546 1.6Z"
                fill="#000"
              ></path>
            </svg>{" "}
            Continue with Apple
          </Button>
          <br />
          <br />
          <Button className="btn-threes" block>
            <svg
              width="24px"
              height="24px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              version="1.1"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M21.6 12.227c0-.709-.064-1.39-.182-2.045H12v3.868h5.382a4.6 4.6 0 0 1-1.996 3.018v2.51h3.232c1.891-1.742 2.982-4.305 2.982-7.35Z"
                fill="#4285F4"
              ></path>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 22c2.7 0 4.964-.895 6.618-2.423l-3.232-2.509c-.895.6-2.04.955-3.386.955-2.605 0-4.81-1.76-5.595-4.123H3.064v2.59A9.996 9.996 0 0 0 12 22Z"
                fill="#34A853"
              ></path>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M6.405 13.9c-.2-.6-.314-1.24-.314-1.9 0-.66.114-1.3.314-1.9V7.51H3.064A9.996 9.996 0 0 0 2 12c0 1.614.386 3.14 1.064 4.49l3.34-2.59Z"
                fill="#FBBC05"
              ></path>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11.996 5.977c1.469 0 2.787.505 3.823 1.496l2.868-2.868C16.955 2.99 14.692 2 11.997 2 8.086 2 4.705 4.24 3.06 7.51l3.341 2.59c.786-2.364 2.99-4.123 5.595-4.123Z"
                fill="#EA4335"
              ></path>
            </svg>{" "}
            Continue with Google
          </Button>
          <br />
          <br />
          <Button className="btn-threes" block>
            <svg
              width="24px"
              height="24px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              version="1.1"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M22.001 12c0-5.523-4.477-10-10-10C6.477 2 2 6.477 2 12c0 4.992 3.657 9.13 8.438 9.88V14.89h-2.54v-2.89h2.54V9.796c0-2.506 1.493-3.89 3.777-3.89 1.095 0 2.239.195 2.239.195v2.46h-1.261c-1.242 0-1.63.772-1.63 1.563V12h2.774l-.444 2.891h-2.33v6.988c4.781-.75 8.438-4.887 8.438-9.879Z"
                fill="#1877F2"
              ></path>
            </svg>{" "}
            Continue with Facebook
          </Button>
        </Form>
      </Modal>
    </>
  );
};
export default ModalOne;
