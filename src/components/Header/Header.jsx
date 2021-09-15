import './Header.scss';
import React from 'react';
import MenuComponent from './../Menu';
import { Link, useHistory } from 'react-router-dom';
import { HeartOutlined, SearchOutlined, ShoppingOutlined, UserOutlined } from '@ant-design/icons';
import { toggle_isModalOpen } from '../../store/modal/actions';
import { connect, useDispatch } from 'react-redux';
import { Button, Dropdown, Input, Menu, Form } from 'antd';
import { searchProducts } from '../../api/searchProducts';
import { setProducts } from '../../store/products/actions';

function Header ({ cart, favorite }) {
  const dispatch = useDispatch();
  const history = useHistory();

  const onFinish = (e) => {
    searchProducts(e)
      .then(value => {
        dispatch(setProducts(value.data))
        history.push(`/shop?search=${e.query}`);
      })
  }
  
  const searchInput = (
    <Menu>
      <Form
      onFinish={onFinish}>
          <Form.Item
            name='query'>
            <Input
              placeholder='Search...' />
            </Form.Item>
        <Button type='submit' htmlType='submit'>
          Search
        </Button>
      </Form>
    </Menu>
  )
  
  const toggleModal = () => {
    dispatch(toggle_isModalOpen());
  };
  return (
    <>
      <div className='header'>
        <div className='header__logo'>
          <a href="/#">
            Savvy<span>Tots</span>
          </a>
        </div>
        <div className='header__menu'>
         <MenuComponent />
        </div>
        <div className='header__icon'>
          <Dropdown key='more' overlay={searchInput}>
          <a href='/#' style={{
            border: 'none',
            padding: 0,
          }}>
            <SearchOutlined />
          </a>
          </Dropdown>
          <Link to='/favorite'>
            <HeartOutlined style={ { fontSize: '24px', color: '#A8D6CB' } }/><sup className='header__sup-text'>{ favorite.length }</sup>
          </Link>
          <Link to='/cart'>
            <ShoppingOutlined style={ { fontSize: '24px', color: '#A8D6CB' } }/><sup className='header__sup-text'>{ cart.length }</sup>
          </Link>
          <Link to='/login'>
            <UserOutlined onClick={ toggleModal } style={ { fontSize: '24px', color: '#A8D6CB' } }/>
          </Link>
        </div>
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
    favorite: state.favorite
  };
};

const mapDispatchToProps = (dispatch) => {
  return {

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
