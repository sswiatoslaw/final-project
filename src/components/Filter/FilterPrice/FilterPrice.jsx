import React, {useState} from 'react'
import './FilterPrice.scss'
import { Slider, Input } from 'antd';
import {MinusOutlined } from '@ant-design/icons';
import {useSelector} from 'react-redux';

const FilterPrice = (props) => {
  const getAllProducts = useSelector(state => state.allProducts)
  const getPrice = getAllProducts.map((item) => { return item.currentPrice })
  const handleChangePrice = (value) => {
    setMinPrice(value[0])
    setMaxPrice(value[1])
  }
  const [minPrice, setMinPrice] = useState()
  const [maxPrice, setMaxPrice] = useState()
  return (
        <div className={'filter__price'}>
          <div className={'filter__price__input'}>
               <Input className={'filter__price__input--item'} type='text' value={minPrice === undefined ? Math.min(...getPrice) : minPrice} />
                <MinusOutlined style={{padding: '5px'}} />
               <Input className={'filter__price__input--item'} type='text' value={maxPrice === undefined ? Math.max(...getPrice) : maxPrice}/>
               {props.button}
          </div>
      <Slider
      range
      min={Math.min(...getPrice)}
      max={Math.max(...getPrice)}
      value={[minPrice === undefined ? Math.min(...getPrice) : minPrice, maxPrice === undefined ? Math.max(...getPrice) : maxPrice]}
      step={1}
      onChange={
        handleChangePrice
        }/>
        </div>
  )
}

export default FilterPrice
