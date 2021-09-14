import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Product from '../Product/Product';
import Button from '../Button/Button';
import { addItemToFavoriteAction, removeItemFromFavoriteAction } from '../../store/favorite/actions';
import { addItemToCartAction } from '../../store/cart/actions';
import Loading from '../Loading/Loading';
import { notification } from 'antd';
import './SaleNowContent.scss';

const SaleNowContent = ({ allProducts, favorite, addItemToFavoriteAction, removeItemFromFavoriteAction, addItemToCartAction }) => {
  const [products, setProducts] = useState([]);
  const [visible, setVisible] = useState(34);
  const [isLoading, setLoading] = useState(true)

  const viewAllProducts = () => {
    setVisible((prevValue) => prevValue + 4);
  };
  useEffect(() => {
    setProducts(() => {
      const productsNameList = [];
      allProducts.forEach(item => {
        if (!productsNameList.find(el => el.name === item.name && item.color)) {
          productsNameList.push(item)
        }
        setLoading(false)
      })
      return productsNameList
    })
  }, [allProducts]);

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
      <div className='wrapper'>
       <section className='new-collection product__list'>
         <article className='sale-now__article'>
          <h2 className='botanical__title'>SALE</h2>
          <span className='sale-now__text'>Buy 2 Get 30% Off</span>
          <p>Shop our beautiful pieces from past collections at heavily discounted prices. Be quick, stock is limited and selling FAST!</p>
          </article>
         <ul className='product__item'>
              {products.slice(30, visible).map((product) => (
                <Product product={product} key={ product._id }
                       onToggleImportant={ () => onToggleImportant(product._id) }
                       addToCart={ () => addToCart(product._id) }/>
              ))}
         </ul>
           <Button onClick={viewAllProducts} modifier='contained' text='View all' width='280px'/>
        </section>
      </div>
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
    removeItemFromFavoriteAction: (productId) => dispatch(removeItemFromFavoriteAction(productId)),
    addItemToFavoriteAction: (productId) => dispatch(addItemToFavoriteAction(productId)),
    addItemToCartAction: (productId) => dispatch(addItemToCartAction(productId)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SaleNowContent);
