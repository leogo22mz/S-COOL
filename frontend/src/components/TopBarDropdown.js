import React, { useState } from 'react';
import './TopBarDropdown.css';
import { MenuOutlined, UserOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

function TopBarDropdown() {
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate(); 

  const handleMenuClick = (key) => {
    setVisible(false);
    switch (key) {
      case '1':
        navigate('/home');
        break;
      case '2':
        navigate('/profile');
        break;
      case '3':
        navigate('/courses');
        break;
      default:
        break;
    }
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