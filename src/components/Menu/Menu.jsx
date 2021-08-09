import React from 'react';
import { Menu } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { add_SelectedMenu } from '../../store/modal/actions';

const MenuComponent = (props) => {
  const dispatch = useDispatch();
  const handleClick = (e) => {
    dispatch(add_SelectedMenu(e.key));
  };
  return (
    <>
      <Menu
        onClick={handleClick}
        selectedKeys={[mapStateToProps.selectedMenu]}
        triggerSubMenuAction='click'
        mode='horizontal'
        overflowedIndicator={<MenuOutlined />}
      >
        <Menu.Item key='1'>
          <Link to='/'>Home</Link>
        </Menu.Item>
        <Menu.Item key='2'>
        <Link to='/shop'>Shop</Link>
        </Menu.Item>
        <Menu.Item key='8'>
          <Link to='/about'>About</Link>
        </Menu.Item>
        <Menu.Item key='9'>
          <Link to='/blog'>Blog</Link>
        </Menu.Item>
        <Menu.Item key='10'>
          <Link to='/contact-us'>Contact Us</Link>
        </Menu.Item>
      </Menu>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    selectedMenu: state.modal.selectedMenu
  };
};

export default MenuComponent