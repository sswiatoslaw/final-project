import React from 'react'
import './FilterPrice.scss'
import { Slider, Input } from 'antd';
import {MinusOutlined } from '@ant-design/icons';
import { connect} from 'react-redux';
import { filterProducts } from '../../../store/Filter/action';
import { setMinPrice, setMaxPrice } from '../../../store/products/actions';

const FilterPrice = ({addProductsByFilters, filter, minPrice, maxPrice}) => {
  const handleChangePrice = (value) => {
    addProductsByFilters({...filter, maxPrice: value[1], minPrice: value[0]})
  }
  return (
        <div className={'filter__price'}>
          <div className={'filter__price__input'}>
               <Input className={'filter__price__input--item'} type='text' value={filter.minPrice || minPrice} />
                <MinusOutlined style={{padding: '5px'}} />
               <Input className={'filter__price__input--item'} type='text' value={filter.maxPrice || maxPrice}/>
          </div>
      <Slider
      range
      max={maxPrice}
      value={[filter.minPrice || minPrice, filter.maxPrice || maxPrice]}
      step={1}
      onChange={handleChangePrice}/>
        </div>
  )
}
const mapStateToProps = (state) => {
  return {
    filter: state.filter,
    minPrice: state.products.minPrice,
    maxPrice: state.products.maxPrice
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addProductsByFilters: (elem) => dispatch(filterProducts(elem)),
    addMinPrice: (elem) => dispatch(setMinPrice(elem)),
    addMaxPrice: (elem) => dispatch(setMaxPrice(elem)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterPrice)
