import React, { useEffect, useState } from 'react';
import Button from '../../components/Button/Button';
import Accordions from '../../components/Collapse/Collapse';
import JoingMailing from '../../components/JoingMailing/JoingMailing';
import ProductContentBlock from '../../components/ProductContentBlock/ProductContentBlock';
import QuantityComponent from '../../components/QuantityComponent';
import SelectSizesComponent from '../../components/SelectSizesComponent';
import TabResponsive from './../../components/Tab/TabResponsive';
import BoughtTogether from './../../components/BoughtTogether/BoughtTogether';
import YouMightLike from '../../components/YouMightLike/YouMightLike';
import './ProductPage.scss'
import { useParams } from 'react-router';
import { getProduct } from '../../api/getProduct';
import { setProduct } from '../../store/productPage/actions';
import { connect } from 'react-redux';
import SelectColor from '../../components/SelectColor';
import { getProducts } from '../../api/getProducts';
import { setProductColor } from '../../store/productColorPage/actions';
import axios from 'axios';
import { getColors } from '../../api/getColors';
import { getColor } from '../../api/getColor';
import MobileTabProductImg from '../../components/Tab/MobileTabProductImg';

const ProductPage = ({addSelectedProductAction, allProducts, identicProduct, selectedProduct, setProductColor}) => {
  const { id } = useParams();
  const [colorName, setColorName] = useState();
  const stateIdenticProduct = [];
  useEffect(() => {
    getColor(selectedProduct.color).then(val => setColorName(val.data.name))
    getProduct(id).then(res => {
      addSelectedProductAction(res.data)
    })

    allProducts.map((product) => {
      if (product.name === selectedProduct.name && product.color !== selectedProduct.color) {
        stateIdenticProduct.push(product)
        setProductColor(stateIdenticProduct)
      }
    })
  }, [allProducts])

  return (
    <div className='wrapper'>
      <div className='product__block'>
        <div className='product__block-left'>
          <MobileTabProductImg/>
          <Accordions/>
        </div>
        <div className='product__block-right'>
          <h2 className='product__title'>{selectedProduct.name}: {colorName}</h2>
          <h3 className='product__price'>${selectedProduct.currentPrice} {selectedProduct.previousPrice && <s className='previous-price'>${selectedProduct.previousPrice}</s>}</h3>
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
    allProducts: state.products.allProducts,
    selectedProduct: state.selectedProduct,
    identicProduct: state.identicProduct.arrayProduct
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setProductColor: (product) => dispatch(setProductColor(product)),
    addSelectedProductAction: (product) => dispatch(setProduct(product)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductPage);