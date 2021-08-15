import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'antd';
import { MinusOutlined, PlusOutlined } from '@ant-design/icons';
import { decreaseQuantity, increaseQuantity } from '../../store/cart/actions';
import './QuantityComponent.scss';

const ButtonGroup = Button.Group;

const QuantityComponent = ({ cart, productId, qualityDecrease, qualityIncrease }) => {
  return (
    <ButtonGroup>
      <Button onClick={ () => qualityDecrease(productId) } style={ { border: 'none' } }>
        <MinusOutlined/>
      </Button>
      <span className='quantity'>
        { cart.find(item => item._id === productId).userQuantity }
        </span>
      <Button onClick={ () => qualityIncrease(productId) } style={ { border: 'none' } }>
        <PlusOutlined/>
      </Button>
    </ButtonGroup>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.cart
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    qualityIncrease: (productId) => dispatch(increaseQuantity(productId)),
    qualityDecrease: (productId) => dispatch(decreaseQuantity(productId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(QuantityComponent);