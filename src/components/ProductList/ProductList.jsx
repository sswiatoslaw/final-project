import React from 'react';
import { connect } from 'react-redux';
import Product from '../Product/Product';
import './ProductList.scss';

const ProductList = ({ allProducts}) => {
  return (
    <>
       <section className='product__list'>
            <ul className='product__item'>
            {allProducts.map((product) => {
              return (
               <Product product={product} key={product._id} />
              )
            })};
           </ul>
        </section>
    </>
  )
};

const mapStateToProps = (state) => {
  return {
    allProducts: state.allProducts
  };
};

export default connect(mapStateToProps)(ProductList);