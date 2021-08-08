import './Header.scss';
import React from 'react';
import MenuComponent from './../Menu';
import { Link } from 'react-router-dom';
import { HeartOutlined, ShoppingOutlined, UserOutlined } from '@ant-design/icons';
import { toggle_isModalOpen } from '../../store/modal/actions';
import { connect, useDispatch } from 'react-redux';

function Header ({ cart }) {
  const dispatch = useDispatch();
  const toggleModal = () => {
    dispatch(toggle_isModalOpen());
  };

  return (
    <>
      <div className='header'>
        <div className='header__logo'>
          <h1>
            Savvy<span>Tots</span>
          </h1>
        </div>
        <div className='header__menu'>
         <MenuComponent />
        </div>
        <div className='header__icon'>
          <Link to='/favorite'>
            <HeartOutlined style={{ fontSize: '24px', color: '#A8D6CB' }} />
          </Link>
          <Link to='/cart'>
            <ShoppingOutlined style={{ fontSize: '24px', color: '#A8D6CB' }} /><sup className='header__sup-text'>{cart.length}</sup>
          </Link>
          <Link to='/login'>
            <UserOutlined onClick={toggleModal} style={{ fontSize: '24px', color: '#A8D6CB' }} />
          </Link>
        </div>
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    cart: state.cart
  };
};

export default connect(mapStateToProps)(Header);
