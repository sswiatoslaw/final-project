import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Product from '../Product/Product';
import Button from '../Button/Button';
import { addItemToFavoriteAction, removeItemFromFavoriteAction } from '../../store/favorite/actions';
import { addItemToCartAction } from '../../store/cart/actions';
import Loading from '../Loading/Loading';
import { notification } from 'antd';
import './Botanical.scss';
import { useHistory } from 'react-router';

const Botanical = ({
  allProducts,
  favorite,
  addItemToFavoriteAction,
  removeItemFromFavoriteAction,
  addItemToCartAction
}) => {
  const history = useHistory()
  const [products, setProducts] = useState([]);
  const [visible, setVisible] = useState(7);
  const [isLoading, setLoading] = useState(true)

  const showMoreProducts = () => {
    setVisible((prevValue) => prevValue + 4);
  };
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
    console.log(productId);
    if (token) {
      addItemToCartAction(productId)
    } else {
      openErrorNotification('cart')
    }
  }

  return (
    <>
      <div className='wrapper'>
       <section className='botanical product__list'>
         <h2 className='botanical__title'>BOTANICAL</h2>
            <ul className='product__item'>
              {products.slice(3, visible).map((product) => (
                <Product product={ product }
                onClick={() => {
                  history.push(`/shop/${product.itemNo}`)
                }}
                key={ product._id }
                onToggleImportant={ () => onToggleImportant(product._id) }
                addToCart={ () => addToCart(product._id) }/>
              ))}
           </ul>
           <Button onClick={showMoreProducts} modifier='contained' text='Show more' width='280px'/>
        </section>
      </div>
    </>
  )
};

const mapStateToProps = (state) => {
  return {
    allProducts: state.products.allProducts,
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

export default connect(mapStateToProps, mapDispatchToProps)(Botanical);
