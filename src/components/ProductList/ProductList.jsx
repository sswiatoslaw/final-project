import React from 'react';
import Product from '../Product/Product';
import './ProductList.scss';

const ProductList = () => {
  return (
    <>
        <ul className='products__list'>
        <Product />
        </ul>
      
    </>
  );
};

export default ProductList;
