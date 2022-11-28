import React, { useState } from 'react';
import "../App.css";
import { Dropdown, Space } from 'antd';
const App = () => {
  const [open, setOpen] = useState(false);
  const handleMenuClick = (e) => {
    if (e.key === '3') {
      setOpen(false);
    }
  };
  const handleOpenChange = (flag) => {
    setOpen(flag);
  };
  const items = [
    {
      label: 'Log in',
      key: '1',
    },
    {
      label: 'Sign up',
      key: '2',
    },
    {
      label: 'Become a host',
      key: '3',
    },
    {
      label: 'How Turo works',
      key: '4',
    },
    {
      label: 'Contact support',
      key: '5',
    },
    {
      label: 'Legal',
      key: '6',
    },
    {
      label: 'Insurance & protection',
      key: '7',
    },
    {
      label: 'Host tools',
      key: '8',
    },
    {
      label: 'Carculator',
      key: '9',
    },
  ];
  return (
    <Dropdown
      menu={{
        items,
        onClick: handleMenuClick,
      }}
      onOpenChange={handleOpenChange}
      open={open}
    >
      <a onClick={(e) => e.preventDefault()}>
        <Space>
          <i className="fa-solid fa-bars"></i>
          <i className="fa-regular fa-user"></i>
        </Space>
      </a>
    </Dropdown>
  );
};
export default App;