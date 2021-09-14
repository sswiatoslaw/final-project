import React, { useEffect } from 'react';
import Button from '../../components/Button/Button';
import Accordions from '../../components/Collapse/Collapse';
import JoingMailing from '../../components/JoingMailing/JoingMailing';
import ProductContentBlock from '../../components/ProductContentBlock/ProductContentBlock';
import QuantityComponent from '../../components/QuantityComponent';
import SelectSizesComponent from '../../components/SelectSizesComponent';
import DesktopTabProductImg from './../../components/Tab/DesktopTabProductImg';
import MobileTabProductImg from './../../components/Tab/MobileTabProductImg';
import BoughtTogether from './../../components/BoughtTogether/BoughtTogether';
import YouMightLike from '../../components/YouMightLike/YouMightLike';
import './ProductPage.scss'
import { useParams } from 'react-router';
import { getProduct } from '../../api/getProduct';
import { setProduct } from '../../store/productPage/actions';
import { connect } from 'react-redux';

const ProductPage = ({addSelectedProductAction, selectedProduct}) => {
  const { id } = useParams();
  
  useEffect(() => {
    getProduct(id).then(res => {
      addSelectedProductAction(res.data)
    })
  }, [id, addSelectedProductAction])

  return (
    <div className='wrapper'>
      <div className='product__block'>
        <div className='product__block-left'>
          <DesktopTabProductImg/>
          <Accordions/>
        </div>
        <div className='product__block-right'>
          <h2 className='product__title'>Newborn Development: <br/>The First 12 Weeks</h2>
          <SelectSizesComponent/>
          <QuantityComponent/>
          <Button modifier='contained' text='Add to cart' width='100%'/>
          <Button modifier='outlined' text='Add to wish' width='100%'/>
          <ProductContentBlock/>
        </div>
      </div>
      <BoughtTogether/>
      <YouMightLike/>
      <JoingMailing />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    selectedProduct: state.selectedProduct
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addSelectedProductAction: (product) => dispatch(setProduct(product)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductPage);