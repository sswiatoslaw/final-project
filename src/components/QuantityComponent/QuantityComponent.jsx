import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'antd';
import { MinusOutlined, PlusOutlined } from '@ant-design/icons';
import { addProductToCartAction, decreaseQuantity } from '../../store/cart/actions';
import './QuantityComponent.scss';

const ButtonGroup = Button.Group;

const QuantityComponent = ({cartQuantity, id, quantityDecrease, quantityIncrease}) => {
  return (
    <div>
    <h3 className='select__title'>Quantity</h3>
    <ButtonGroup>
      <Button onClick={ () => quantityDecrease(id) } style={ {border: 'none'} }>
        <MinusOutlined/>
      </Button>
      <span className='quantity'>
         { cartQuantity }
        </span>
      <Button onClick={ () => quantityIncrease(id) } style={ {border: 'none'} }>
        <PlusOutlined/>
      </Button>
    </ButtonGroup>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    quantityIncrease: (productId) => dispatch(addProductToCartAction(productId)),
    quantityDecrease: (productId) => dispatch(decreaseQuantity(productId))
  };
};

export default connect(null, mapDispatchToProps)(QuantityComponent);