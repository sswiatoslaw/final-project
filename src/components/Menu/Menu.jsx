import React, { Fragment } from 'react';
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
import { useDispatch, useSelector } from 'react-redux';
import { add_SelectedMenu } from '../../store/modal/actions';
const { SubMenu } = Menu;

const MenuComponent = () => {
  const dispatch = useDispatch()
  const mode = useSelector(state => state.modal.mode);
  const theme = useSelector(state => state.modal.theme);
  const selectedMenu = useSelector(state => state.modal.selectedMenu)
  const history = useHistory();
  const changeUrl = () => { history.push('/shop') };

  const handleClick = (e) => {
    dispatch(add_SelectedMenu(e.key))
  }
  return (
    <>
      <Menu
        onClick={handleClick}
        selectedKeys={[selectedMenu]}
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
          <div key="11" className="header__icon-mobile">
          <Menu.Item key="12" icon={<HeartOutlined />}>
            <Link to="/favorite">
                Favorite
            </Link>
          </Menu.Item>
          <Menu.Item key="13" icon={<ShoppingOutlined />}>
            <Link to="/cart">
                Cart
            </Link>
          </Menu.Item>
          <Menu.Item key="14" icon={<UserOutlined />}>
            <Link to ='/user'>
                User
            </Link>
          </Menu.Item>
          </div>
      </Menu>
    </>
  );
};

export default MenuComponent;
