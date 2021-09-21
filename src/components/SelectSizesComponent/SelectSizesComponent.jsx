import React, { useEffect, useState } from 'react';
import { Select } from 'antd';
import './SelectSizesComponent.scss';
import { connect } from 'react-redux';
import { setProduct } from '../../store/productPage/actions';

const { Option } = Select;

const SelectSizesComponent = ({addSelectedProductAction, identicProduct, selectedProduct}) => {
  function handleChange (value) {
    const filter = identicProduct.filter(product => product.sizes == value && product.color == selectedProduct.color)
    console.log(`selected ${value}`);
  }

  return (
    <div className='select'>
      <h3 className='select__title'>Size</h3>
      <Select className='select__content' defaultValue={selectedProduct.sizes} onChange={ handleChange }>
        { identicProduct.length > 0 && identicProduct.map((size, id) => <Option key={ id } className='select__text' value={ size.sizes }>{ size.sizes }</Option>) }
      </Select>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    identicProduct: state.identicProduct,
    selectedProduct: state.selectedProduct,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addSelectedProductAction: (product) => dispatch(setProduct(product)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectSizesComponent)
