import React, { useState } from 'react';
import { Dropdown, Menu } from 'antd';
import { MenuOutlined, UserOutlined } from '@ant-design/icons';
import './TopBarDropdown.css'; 

function TopBarDropdown() {
  const [visible, setVisible] = useState(false);

  const handleMenuClick = (e) => {
    if (e.key === '3') {
      setVisible(false);
    }
  };

  const handleVisibleChange = flag => {
    setVisible(flag);
  };

  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="1">Home</Menu.Item>
      <Menu.Item key="2">Profile</Menu.Item>
      <Menu.Item key="3">Courses</Menu.Item>
    </Menu>
  );

  return (
    <div className="dropdownContainer">
      <Dropdown
        overlay={menu}
        onVisibleChange={handleVisibleChange}
        visible={visible}
        trigger={['click', 'hover']}
      >
        <MenuOutlined
          onMouseOver={() => setVisible(true)}
          className="iconHover"
        />
      </Dropdown>
      <div className="profileIconContainer">
        <UserOutlined style={{ fontSize: '24px' }} />
      </div>
    </div>
  );
}

export default TopBarDropdown;
