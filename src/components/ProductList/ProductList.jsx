import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Product from '../Product/Product';
import { addItemToFavoriteAction, removeItemFromFavoriteAction } from '../../store/favorite/actions';
import { addItemToCartAction } from '../../store/cart/actions';
import Loading from '../Loading/Loading';
import { notification } from 'antd';
import './ProductList.scss';
import { useHistory } from 'react-router';
import { getProduct } from '../../api/getProduct';
import { setProduct } from '../../store/productPage/actions';

const ProductList = ({
  allProducts,
  favorite,
  addItemToFavoriteAction,
  removeItemFromFavoriteAction,
  products,
  setProducts,
  addItemToCartAction,
  addSelectedProductAction
}) => {
  const [isLoading, setLoading] = useState(true)
  const history = useHistory();

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

          { products.map((product) => {
            return (
              <Product product={ product }
                       key={ product._id }
                       onClick={() => {
                         history.push(`/shop/${product.itemNo}`)
                       }}
                       onToggleImportant={ () => onToggleImportant(product._id) }
                       addToCart={ () => addToCart(product._id) }/>
            )
          }) }
        </ul>
      </section>
    </>
  )
};

const mapStateToProps = (state) => {
  return {
    allProducts: state.allProducts,
    favorite: state.favorite,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addSelectedProductAction: (product) => dispatch(setProduct(product)),
    removeItemFromFavoriteAction: (productId) => dispatch(removeItemFromFavoriteAction(productId)),
    addItemToFavoriteAction: (productId) => dispatch(addItemToFavoriteAction(productId)),
    addItemToCartAction: (productId) => dispatch(addItemToCartAction(productId)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);