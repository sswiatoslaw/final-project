import React from 'react';
import { Layout, Menu, Card } from 'antd';
import {
  UserOutlined,
  DropboxOutlined,
  ShoppingCartOutlined,
  CreditCardOutlined,
  EnvironmentOutlined,
} from '@ant-design/icons';
import './personalArea.scss';
import { NavLink, useLocation } from 'react-router-dom';
import Orders from './MyOrders';
import CreditCards from './CreditCards';
import PersonalInfo from './PersonalInfo';
import Delivery from './Delivery';
import Bonus from './Bonus';

const PersonalArea = () => {
  const { Header, Footer, Sider } = Layout;
  const location = useLocation();

  return (
    <Layout>
      <Sider
        width="230"
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}>
        <div className="logo" />
        <Menu theme="dark" style={{ marginTop: '60px' }} mode="inline" defaultSelectedKeys={['1']}>
          <Menu.Item key="1" icon={<UserOutlined />}>
            <NavLink to="/me">Personal information</NavLink>
          </Menu.Item>
          <Menu.Item key="2" icon={<ShoppingCartOutlined />}>
            <NavLink to="/me/my-orders">My orders</NavLink>
          </Menu.Item>
          <Menu.Item key="3" icon={<CreditCardOutlined />}>
            <NavLink to="/me/credit-cards">Credit cards</NavLink>
          </Menu.Item>
          <Menu.Item key="4" icon={<EnvironmentOutlined />}>
          <NavLink to="/me/delivery"> Delivery addresses </NavLink>
          </Menu.Item>
          <Menu.Item key="5" icon={<DropboxOutlined />}>
          <NavLink to="/me/bonus">Bonus </NavLink>
          </Menu.Item>
        </Menu>
      </Sider>

      <Layout>
        <Header className="site-layout-sub-header-background" style={{ padding: 0 }}></Header>
        {location.pathname === '/me' && <PersonalInfo />}
        {location.pathname === '/me/my-orders' && <Orders />}
        {location.pathname === '/me/credit-cards' && <CreditCards />}
        {location.pathname === '/me/delivery' && <Delivery />}
        {location.pathname === '/me/bonus' && <Bonus />}
      </Layout>
    </Layout>
  );
};

export default PersonalArea;
