import './Header.scss'
import React from 'react'
import { Link } from 'react-router-dom';
import { HeartOutlined, ShoppingOutlined, UserOutlined } from '@ant-design/icons'

function Header () {
  return (
        <div className="header">
          <div className="header-logo">
            LOGO
            <h1>Savvy<span>Tots</span></h1>
          </div>
          <div className="header-menu">
            <Link to="/" className="active">Home</Link>
            <Link to="/shop">Shop</Link>
            <Link to="/about">About</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/contact-us">Contact Us</Link>
          </div>
          <div className="header-icon">
          <HeartOutlined style={{ fontSize: '24px', color: '#A8D6CB' }} />
          <ShoppingOutlined style={{ fontSize: '24px', color: '#A8D6CB' }} />
          <UserOutlined style={{ fontSize: '24px', color: '#A8D6CB' }} />
          </div>
        </div>
  );
}

export default Header
