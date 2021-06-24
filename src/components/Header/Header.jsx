import './Header.scss';
import React, { useState } from 'react';
import MenuComponent from './../Menu';
import { Link } from 'react-router-dom'
import {
  ShoppingOutlined,
  UserOutlined,
  HeartOutlined
} from '@ant-design/icons';
function Header () {
  const [collapsed, setCollapsed] = useState(true);
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
    document.querySelector('.menu').classList.toggle('active');
  };
  
  return (
    <>
      <div className="header">
        <div className="header-logo">
          <h1>Savvy<span>Tots</span></h1>
        </div>
        <div className="header-menu">
        <MenuComponent />
        </div>
        <div className="header-icon">
          <Link to="/favorite">
            <HeartOutlined />
          </Link>
          <Link to="/cart">
            <ShoppingOutlined />
          </Link>
          <Link to ='/user'>
            <UserOutlined />
          </Link>
          {/* <Button onClick={toggleCollapsed} size='large'>
            {React.createElement(collapsed ? MenuOutlined : CloseOutlined)}
          </Button> */}
        </div>
      </div>
    </>
  );
}

export default Header;
