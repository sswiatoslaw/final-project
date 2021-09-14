import React, { useEffect, useState } from 'react';
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
import { useParams } from 'react-router';
import { getProduct } from '../../api/getProduct';
import { setProduct } from '../../store/productPage/actions';
import { connect } from 'react-redux';
import SelectColor from '../../components/SelectColor';
import { getProducts } from '../../api/getProducts';
import { setProductColor } from '../../store/productColorPage/actions';
import axios from 'axios';
import { getColors } from '../../api/getColors';

const ProductPage = ({addSelectedProductAction, identicProduct, selectedProduct, setProductColor}) => {
  const { id } = useParams();
  const [array, setArray] = useState();

  useEffect(() => {
    // getProducts().then(value => {
    //   const test = value.data;
    //   test.map(val => {
    //     getColors().then(color => {
    //       if (val.color == color.name) {
    //         console.log(val._id)
    //         axios.put(`https://boiling-dawn-71074.herokuapp.com/api/products/${val._id}`, {color: color._id}).then(res => console.log(res))
    //       }
    //     })
    //   })
    // })
    const arr = []
    getProduct(id).then(res => {
      addSelectedProductAction(res.data)
    })

    getProducts().then(value => {
      value.data.forEach((product) => {
        if (product.name === selectedProduct.name && product.color === selectedProduct.color) {
          arr.push(product)
        }
      })
      setArray(arr)
      setProductColor(arr)
    })
  }, [setProductColor])

  return (
    <div className='wrapper'>
      <div className='product__block'>
        <div className='product__block-left'>
          <MobileTabProductImg/>
          <Accordions/>
        </div>
        <div className='product__block-right'>
          <h2 className='product__title'>{selectedProduct.name}: {selectedProduct.color}</h2>
          <h3 className='product__price'>${selectedProduct.currentPrice} {selectedProduct.previousPrice && <s className='previous-price'>${selectedProduct.previousPrice}</s>}</h3>
          <SelectSizesComponent/>
          <SelectColor />
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
    selectedProduct: state.selectedProduct,
    identicProduct: state.identicProduct
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setProductColor: (product) => dispatch(setProductColor(product)),
    addSelectedProductAction: (product) => dispatch(setProduct(product)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductPage);