import './Header.scss';
import React from 'react';
import MenuComponent from './../Menu';
import { Link } from 'react-router-dom'
import {
  ShoppingOutlined,
  UserOutlined,
  HeartOutlined
} from '@ant-design/icons';
function Header () {
  return (
    <>
      <div className="header">
        <div className="header__logo">
          <h1>Savvy<span>Tots</span></h1>
        </div>
        <div className="header__menu">
        <MenuComponent />
        </div>
        <div className="header__icon">
          <Link to="/favorite">
            <HeartOutlined style={ { fontSize: '24px', color: '#A8D6CB' } }/>
          </Link>
          <Link to="/cart">
            <ShoppingOutlined style={ { fontSize: '24px', color: '#A8D6CB' } }/>
          </Link>
          <Link to ='/user'>
            <UserOutlined style={ { fontSize: '24px', color: '#A8D6CB' } }/>
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
