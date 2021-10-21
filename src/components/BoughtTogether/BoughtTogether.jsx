import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Product from '../Product/Product';
import './BoughtTogether.scss';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { setProduct } from '../../store/productPage/actions';
import {
  addItemToFavoriteAction,
  removeItemFromFavoriteAction,
} from '../../store/favorite/actions';
import { addItemToCartAction } from '../../store/cart/actions';
import { notification } from 'antd';
import { useHistory } from 'react-router';

const BoughtTogether = ({ allProducts, favorite }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(() => {
      const productsNameList = [];
      allProducts.forEach((item) => {
        if (!productsNameList.find((el) => el.name === item.name && item.color)) {
          productsNameList.push(item);
        }
      });
      return productsNameList;
    });
  }, [allProducts]);

  const history = useHistory();

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
      favorite.find((product) => product._id === productId)
        ? removeItemFromFavoriteAction(productId)
        : addItemToFavoriteAction(productId);
    } else {
      openErrorNotification('favorites');
    }
  };

  const addToCart = (productId) => {
    console.log(productId);
    if (token) {
      addItemToCartAction(productId);
    } else {
      openErrorNotification('cart');
    }
  };

  const boughtItems = products.slice(10, 26).map((product) => (
    <Product
      className="bought__item"
      product={product}
      key={product._id}
      onClick={() => {
        history.push(`/shop/${product.itemNo}`);
      }}
      onToggleImportant={() => onToggleImportant(product._id)}
      addToCart={() => addToCart(product._id)}
    />
  ));

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  return (
    <>
      <div className="wrapper">
        <section className="product__list bought">
          <h2 className="bought__title">Frequently Bought Together</h2>
          <Slider {...settings}>
            <ul className="product__item"></ul>
            {boughtItems}
          </Slider>
        </section>
      </div>
    </>
  );
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
    addSelectedProductAction: (product) => dispatch(setProduct(product)),
    removeItemFromFavoriteAction: (productId) => dispatch(removeItemFromFavoriteAction(productId)),
    addItemToFavoriteAction: (productId) => dispatch(addItemToFavoriteAction(productId)),
    addItemToCartAction: (productId) => dispatch(addItemToCartAction(productId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BoughtTogether);
