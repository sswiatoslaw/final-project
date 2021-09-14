import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Product from '../Product/Product';
import Button from '../Button/Button';
import { addItemToFavoriteAction, removeItemFromFavoriteAction } from '../../store/favorite/actions';
import { addItemToCartAction } from '../../store/cart/actions';
import Loading from '../Loading/Loading';
import { notification } from 'antd';
import './NewCollectionContent.scss';

const NewCollectionContent = ({ allProducts, favorite, addItemToFavoriteAction, removeItemFromFavoriteAction, addItemToCartAction }) => {
  const [products, setProducts] = useState([]);
  const [visible, setVisible] = useState(16);
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
         <article className='new-collection__article'>
          <h2 className='botanical__title'>SS21 - DROP ONE</h2>
          <p>Introducing Drop One from our NEW SS21 Range! A magical collection of thoughtfully designed, locally illustrated, organic baby clothing and accessories.</p>
          <p>This season is all about invoking those beachy boho vibes with soft earthy tones of honey, terracotta, baby blue and taupe. Each piece is designed with the perfect amount of comfort and versatility that you have come to know and love from Aster & Oak.</p>
          <p>Rainbows, mermaids, florals and all things beach can be seen throughout the collection, speaking to the inner flower child in us all, with some beautiful gender-natural pieces designed to mix & match throughout the collection harmoniously. Also featured throughout are beautiful ruffles, tulle and bows that add those special final touches to this ethically made collection.</p>
          <p>As always, this range has been created exclusively using 100% GOTS certified organic cotton and dyes, making them extremely safe, soft and gentle on your little one's skin as well as gentle on the environment.</p>
         </article>
         <ul className='product__item'>
              {products.slice(12, visible).map((product) => (
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

export default connect(mapStateToProps, mapDispatchToProps)(NewCollectionContent);
