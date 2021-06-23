import React from 'react';
import { Menu } from 'antd';
import {
  HomeOutlined,
  InfoCircleOutlined,
  InsertRowLeftOutlined,
  PhoneOutlined,
  ShopOutlined,
  ShoppingOutlined,
  UserOutlined,
  HeartOutlined
} from '@ant-design/icons';
import 'antd/dist/antd.css';
import { Link, useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux';
const { SubMenu } = Menu;

const MenuComponent = () => {
  const mode = useSelector(state => state.mode);
  const theme = useSelector(state => state.theme);
  const history = useHistory();
  const changeUrl = () => { history.push('/shop') };
  return (
    <>
      <Menu
        className="header-menu__mobile"
        style={{ width: '90%' }}
        mode={mode}
        theme={theme}>
        <Menu.Item key="1" icon={<HomeOutlined />}>
          <Link to="/">Home</Link>
        </Menu.Item>
            <SubMenu key='sub1' title="Shop" onclick={changeUrl} icon={<ShopOutlined />}>
                <Menu.Item key='2'>
                    <Link to="/shop/one-pices">One-pices</Link>
                </Menu.Item>
                <Menu.Item key="3">
                    <Link to="/shop/tops-bottoms">Tops & bottoms</Link>
                </Menu.Item>
                <Menu.Item key="4">
                    <Link to="/shop/nursery">Nursery</Link>
                </Menu.Item>
                <Menu.Item key="5">
                    <Link to="/shop/feeding">Feeding</Link>
                </Menu.Item>
                <Menu.Item key="6">
                    <Link to="/shop/accessories">Accessories</Link>
                </Menu.Item>
                <Menu.Item key="7">
                    <Link to="/shop/bath-body">Bath & Body</Link>
                </Menu.Item>
            </SubMenu>
          <Menu.Item key="8" icon={<InfoCircleOutlined />}>
            <Link to="/about">About</Link>
          </Menu.Item>
          <Menu.Item key="9" icon={<InsertRowLeftOutlined />}>
            <Link to="/blog">Blog</Link>
          </Menu.Item>
          <Menu.Item key="10" icon={<PhoneOutlined />}>
            <Link to="/contact-us">Contact Us</Link>
          </Menu.Item>
          <Menu.Item key="11" icon={<HeartOutlined/>}>
            <Link to="/favorite">
                Favorite
            </Link>
          </Menu.Item>
          <Menu.Item key="12" icon={<ShoppingOutlined/>}>
            <Link to="/cart">
                Cart
            </Link>
          </Menu.Item>
          <Menu.Item key="13" icon={<UserOutlined/>}>
            <Link to ='/user'>
                User
            </Link>
          </Menu.Item>
      </Menu>
    </>
  );
};

export default MenuComponent;
