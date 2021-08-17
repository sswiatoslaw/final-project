import React from 'react';
import FavoriteProductItem from './FavoriteProductItem';
import './FavoriteProduct.scss';
import { connect } from 'react-redux';

const FavoriteProductsList = ({ favorite }) => {
  const productList = favorite.map((product) => {
    return (
      <li key={ product._id } className='favorite__item'>
        <FavoriteProductItem product={ product } key={ product._id }/>
      </li>
    );
  });

  return (
    <section className='favorite'>
      <div className='wrapper'>
        <ul className='favorite__list'>
          { productList }
        </ul>
      </div>
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    favorite: state.favorite
  };
};

export default connect(mapStateToProps)(FavoriteProductsList);
