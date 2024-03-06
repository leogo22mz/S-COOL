import React, { useState } from 'react';
import './TopBarDropdown.css';
import { MenuOutlined, UserOutlined } from '@ant-design/icons';

function TopBarDropdown() {
  const [visible, setVisible] = useState(false);

  const handleMenuClick = (key) => {
    setVisible(false);
  };

  return (
    <div className="dropdownContainer">
      <div 
        className="menuIcon"
        onMouseOver={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)} 
      >
        <MenuOutlined style={{ fontSize: '20px' }} />
        {visible && (
          <div className="customMenu">
            <div className="menuItem" onClick={() => handleMenuClick('1')}>Home</div>
            <div className="menuItem" onClick={() => handleMenuClick('2')}>Profile</div>
            <div className="menuItem" onClick={() => handleMenuClick('3')}>Courses</div>
            <div className="menuItem" onClick={() => handleMenuClick('3')}>Log Out</div>
          </div>
        )}
      </div>
      <div className="profileIcon">
        <UserOutlined style={{ fontSize: '24px' }} />
      </div>
    </div>
  );
}

export default TopBarDropdown;