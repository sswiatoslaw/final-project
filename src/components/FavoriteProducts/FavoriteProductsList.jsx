import React from 'react';
import FavoriteProductItem from './FavoriteProductItem';
import './FavoriteProduct.scss';

const FavoriteProductsList = ({ products }) => {
  const productList = products.map((product) => {
    return (
      <li key={ product.itemNo } className='favorite__item'>
        <FavoriteProductItem product={ product } key={ product.itemNo }/>
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

export default FavoriteProductsList;
