import React from 'react';
import Button from '../../components/Button/Button';
import Accordions from '../../components/Collapse/Collapse';
import JoingMailing from '../../components/JoingMailing/JoingMailing';
import ProductContentBlock from '../../components/ProductContentBlock/ProductContentBlock';
import QuantityComponent from '../../components/QuantityComponent';
import SelectSizesComponent from '../../components/SelectSizesComponent';
import MobileTabProductImg from './../../components/Tab/MobileTabProductImg';
import BoughtTogether from './../../components/BoughtTogether/BoughtTogether';
import YouMightLike from '../../components/YouMightLike/YouMightLike';
import './ProductPage.scss'

const ProductPage = () => {
  return (
    <div className='wrapper'>
      <div className='product__block'>
      <MobileTabProductImg/>
      <h2 className='product__title'>Newborn Development: <br/>The First 12 Weeks</h2>
      <SelectSizesComponent/>
      <QuantityComponent/>
      <Button modifier='contained' text='Add to cart' width='100%'/>
      <Button modifier='outlined' text='Add to wish' width='100%'/>
      <ProductContentBlock/>
      <Accordions/>
      </div>
      <BoughtTogether/>
      <YouMightLike/>
      <JoingMailing />
    </div>
  );
};

export default ProductPage;