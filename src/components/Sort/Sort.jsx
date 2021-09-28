import React from 'react'
import { Select } from 'antd';
import './Sort.scss'
import { getProductsByFilters } from '../../store/products/actions';
import { filterProducts } from '../../store/Filter/action';
import { connect } from 'react-redux';

const Sort = ({getProducts, addProductsByFilters, filter}) => {
  const { Option } = Select;
  const sortProducts = (selectedValues) => {
    addProductsByFilters({...filter, sort: [selectedValues]})
    getProducts()
  }
  return (
    <Select className={'select-sort'} defaultValue="Sort by" onChange={(selectedValues) => sortProducts(selectedValues)}>
    <Option value='+currentPrice'>
        from cheap to expensive
    </Option>
    <Option value='-currentPrice'>
        from expensive to cheap
    </Option>
  </Select>
  )
}
const mapStateToProps = (state) => {
  return {
    filter: state.filter
  };
};
  
const mapDispatchToProps = (dispatch) => {
  return {
    getProducts: (elem) => dispatch(getProductsByFilters(elem)),
    addProductsByFilters: (elem) => dispatch(filterProducts(elem)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Sort)
