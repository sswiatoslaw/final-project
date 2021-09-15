import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Product from '../Product/Product';
import { addItemToFavoriteAction, removeItemFromFavoriteAction } from '../../store/favorite/actions';
import { addItemToCartAction } from '../../store/cart/actions';
import Loading from '../Loading/Loading';
import { notification } from 'antd';
import './ProductList.scss';

const ProductList = ({
  allProducts,
  filter,
  favorite,
  addItemToFavoriteAction,
  removeItemFromFavoriteAction,
  addItemToCartAction
}) => {
  const [isLoading, setLoading] = useState(true)
  const [products, setProducts] = useState([]);
  useEffect(() => {
    setProducts(() => {
      const productsNameList = [];
      allProducts.forEach(item => {
        if (!productsNameList.find(el => el.name === item.name)) {
          productsNameList.push(item)
        }
        setLoading(false)
      })
      return productsNameList
    })
  }, [allProducts, setProducts])

  if (isLoading) {
    return <Loading/>
  }

  const token = localStorage.getItem('token');

  const openErrorNotification = (description) => {
    notification.error({
      message: 'Please login to your account.',
      description: `Only registered user can use the ${description}`,
      duration: 5,
      placement: 'bottomRight',
      className: 'notification__error',
    });
  };

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
    if (token) {
      addItemToCartAction(productId)
    } else {
      openErrorNotification('cart')
    }
  }

  return (
    <>
      <section className='product__list'>
        <ul className='product__item'>
          {(!products.length && Object.keys(filter).length !== 0
            ? <div className='product__item_not_found'>Sorry, product not found</div>
            : products.map((product) => {
              return (
                <Product product={ product }
                key={ product._id }
                onToggleImportant={ () => onToggleImportant(product._id) }
                addToCart={ () => addToCart(product._id) }/>
              )
            }))}
        </ul>
      </section>
    </>
  )
};

const mapStateToProps = (state) => {
  return {
    allProducts: state.products.allProducts,
    filter: state.filter,
    favorite: state.favorite,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeItemFromFavoriteAction: (productId) => dispatch(removeItemFromFavoriteAction(productId)),
    addItemToFavoriteAction: (productId) => dispatch(addItemToFavoriteAction(productId)),
    addItemToCartAction: (productId) => dispatch(addItemToCartAction(productId)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);