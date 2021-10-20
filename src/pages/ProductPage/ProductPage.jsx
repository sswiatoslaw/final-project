import React, { useEffect, useState } from 'react';
import Button from '../../components/Button/Button';
import Accordions from '../../components/Collapse/Collapse';
import JoingMailing from '../../components/JoingMailing/JoingMailing';
import ProductContentBlock from '../../components/ProductContentBlock/ProductContentBlock';
import QuantityComponent from '../../components/QuantityComponent';
import SelectSizesComponent from '../../components/SelectSizesComponent';
import BoughtTogether from './../../components/BoughtTogether/BoughtTogether';
import YouMightLike from '../../components/YouMightLike/YouMightLike';
import './ProductPage.scss'
import { useParams } from 'react-router';
import { getProduct } from '../../api/getProduct';
import { setProduct } from '../../store/productPage/actions';
import { connect } from 'react-redux';
import { setProductColor } from '../../store/productColorPage/actions';
import { notification } from 'antd';
import { getColor } from '../../api/getColor';
import MobileTabProductImg from '../../components/Tab/MobileTabProductImg';
import { addItemToFavoriteAction, removeItemFromFavoriteAction } from '../../store/favorite/actions';
import { addItemToCartAction } from '../../store/cart/actions';

const ProductPage = ({
  addSelectedProductAction, products, favorite, allProducts, identicProduct, selectedProduct, setProductColor, addItemToFavoriteAction,
  removeItemFromFavoriteAction, addItemToCartAction,
}) => {
  const { id } = useParams();
  const [colorName, setColorName] = useState();
  const stateIdenticProduct = [];
  useEffect(() => {
    getColor(selectedProduct.color).then(val => setColorName(val.data.name))
    getProduct(id).then(res => {
      addSelectedProductAction(res.data)
    })

    allProducts.map((product) => {
      if (product.name === selectedProduct.name && product.color == selectedProduct.color) {
        stateIdenticProduct.push(product)
        setProductColor(stateIdenticProduct)
      }
    })
  }, [allProducts])

  const openErrorNotification = (description) => {
    notification.error({
      message: 'Please login to your account.',
      description: `Only registered user can use the ${description}`,
      duration: 5,
      placement: 'bottomRight',
      className: 'notification__error',
    });
  };

  const token = localStorage.getItem('token');

  const onToggleImportant = (productId) => {
    if (token) {
      favorite.find(product => product._id === productId)
        ? removeItemFromFavoriteAction(productId)
        : addItemToFavoriteAction(productId)
    } else {
      openErrorNotification('favorites')
    }
  }

  const addToCart = (productId) => {
    console.log(productId);
    if (token) {
      addItemToCartAction(productId)
    } else {
      openErrorNotification('cart')
    }
  }

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
          <Button modifier='contained' onClick={() => addToCart(selectedProduct._id)} text='Add to cart' width='100%'/>
          <Button modifier='outlined' onClick={() => onToggleImportant(selectedProduct._id)} text='Add to wish' width='100%'/>
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
    identicProduct: state.identicProduct.arrayProduct,
    favorite: state.favorite
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setProductColor: (product) => dispatch(setProductColor(product)),
    addSelectedProductAction: (product) => dispatch(setProduct(product)),
    removeItemFromFavoriteAction: (productId) => dispatch(removeItemFromFavoriteAction(productId)),
    addItemToFavoriteAction: (productId) => dispatch(addItemToFavoriteAction(productId)),
    addItemToCartAction: (productId) => dispatch(addItemToCartAction(productId)),

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductPage);