import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Product from '../Product/Product';
import { addFavoritesAction, addItemToFavoriteAction, removeItemFromFavoriteAction } from '../../store/favorite/actions';
import Loading from '../Loading/Loading';
import { notification } from 'antd';
import './ProductList.scss';

const ProductList = ({ allProducts, favorite, addFavoritesAction, addItemToFavoriteAction, removeItemFromFavoriteAction, products, setProducts}) => {
  useEffect(() => {
    const localStoreFromFavorite = localStorage.getItem('favorite') === null ? [] : Array.from(JSON.parse(localStorage.getItem('favorite')))
    if (localStoreFromFavorite.length !== 0) {
      addFavoritesAction(localStoreFromFavorite)
    }
  }, [addFavoritesAction])

  const [isLoading, setLoading] = useState(true)

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

  const openErrorNotification = () => {
    notification.error({
      message: 'Please login to your account.',
      description:
        'Only registered user can use the favorites',
      duration: 5,
      placement: 'bottomRight',
      className: 'notification__error',
    });
  };

  const onToggleImportant = (productId) => {
    const token = localStorage.getItem('token');
    if (token) {
      favorite.find(product => product._id === productId)
        ? removeItemFromFavoriteAction(productId)
        : addItemToFavoriteAction(productId)
    } else {
      openErrorNotification()
    }
  }

  return (
    <>
      <section className='product__list'>
        <ul className='product__item'>

          { products.map((product) => {
            return (
              <Product product={ product } key={ product._id } onToggleImportant={ () => onToggleImportant(product._id) }/>
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
    favorite: state.favorite
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeItemFromFavoriteAction: (productId) => dispatch(removeItemFromFavoriteAction(productId)),
    addItemToFavoriteAction: (productId) => dispatch(addItemToFavoriteAction(productId)),
    addFavoritesAction: (arr) => dispatch(addFavoritesAction(arr)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);