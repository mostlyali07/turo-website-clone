import React from "react";
import "../App.css";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
const items = [
  {
    label: "Log in",
    key: "1",
  },
  {
    label: "Sign up",
    key: "2",
  },
  {
    label: "Become a host",
    key: "3",
  },
  {
    label: "How Turo works",
    key: "4",
  },
  {
    label: "Contact support",
    key: "5",
  },
  {
    label: "Legal",
    key: "6",
  },
  {
    label: "Insurance & protection",
    key: "7",
  },
  {
    label: "Host tools",
    key: "8",
  },
  {
    label: "Carculator",
    key: "9",
  },
];
const DropDown2 = () => (
  <Dropdown
    menu={{
      items,
    }}
    trigger={["click"]}
  >
    <a onClick={(e) => e.preventDefault()}>
      <Space>
      <i className="fa-solid fa-bars"></i>
          <i className="fa-regular fa-user"></i>
      </Space>
    </a>
  </Dropdown>
);
export default DropDown2;
