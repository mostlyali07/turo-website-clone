import React, { useState } from 'react';
import { DownOutlined } from '@ant-design/icons';
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
      label: '🚗 Become a host',
      key: '3',
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
          <i class="fa-solid fa-bars"></i>
          <i class="fa-regular fa-user"></i>
        </Space>
      </a>
    </Dropdown>
  );
};
export default App;