import React from 'react';
import { Menu } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { add_SelectedMenu, toggle_isModalOpen } from '../../store/modal/actions';

const MenuComponent = (props) => {
  const { mobile } = props;
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.modal.theme);
  const selectedMenu = useSelector((state) => state.modal.selectedMenu);
  const handleClick = (e) => {
    dispatch(add_SelectedMenu(e.key));
  };
  const toggleModal = () => {
    dispatch(toggle_isModalOpen());
  };
  return (
    <>
      <Menu
        onClick={handleClick}
        selectedKeys={[selectedMenu]}
        triggerSubMenuAction='click'
        mode='horizontal'
        theme={theme}
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

export default MenuComponent;
