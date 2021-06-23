import './Header.scss';
import React, { useState } from 'react';
import MenuComponent from './../Menu';
import { Button } from 'antd';
import { MenuOutlined, CloseOutlined } from '@ant-design/icons';
function Header () {
  const [collapsed, setCollapsed] = useState(true);
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
    console.log(document.querySelector('.ant-menu'));
    document.querySelector('.header-menu__mobile').classList.toggle('active');
  };
  
  return (
    <>
      <div className="header">
        <div className="header-logo">
          <h1>Savvy<span>Tots</span></h1>
        </div>
        <div className="header-menu">
          {/* <Input placeholder="Search..." /> */}
        </div>
        <div className="header-icon">
          <Button onClick={toggleCollapsed} size='large'>
            {React.createElement(collapsed ? MenuOutlined : CloseOutlined)}
          </Button>
        </div>
      </div>
      <MenuComponent />
    </>
  );
}

export default Header;
