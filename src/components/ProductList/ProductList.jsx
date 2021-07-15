import React from 'react';
import { connect } from 'react-redux';
import Product from '../Product/Product';
import './ProductList.scss';

const ProductList = ({ allProducts}) => {
  return (
    <>
        <div className='products__list--title'> </div>
            <ul>
            {allProducts.map((product) => {
              return (
                  <Product key={product._id}/>
              )
            })};
           </ul>
    </>
  )
};

const mapStateToProps = (state) => {
  return {
    allProducts: state.allProducts
  };
};

export default connect(mapStateToProps)(ProductList);
