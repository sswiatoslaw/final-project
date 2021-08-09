import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'antd';
import { MinusOutlined, PlusOutlined } from '@ant-design/icons';
import { decreaseQuantity, increaseQuantity } from '../../store/cart/actions';
import './QuantityComponent.scss';

const ButtonGroup = Button.Group;

const QuantityComponent = ({ cart, itemNo, qualityDecrease, qualityIncrease }) => {
  return (
    <ButtonGroup>
      <Button onClick={ () => qualityDecrease(itemNo) } style={ { border: 'none' } }>
        <MinusOutlined/>
      </Button>
      <span className='quantity'>
        { cart.find(item => item.itemNo === itemNo).userQuantity }
        </span>
      <Button onClick={ () => qualityIncrease(itemNo) } style={ { border: 'none' } }>
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
    qualityIncrease: (itemNo) => dispatch(increaseQuantity(itemNo)),
    qualityDecrease: (itemNo) => dispatch(decreaseQuantity(itemNo))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(QuantityComponent);