import React, { useEffect } from 'react';
import Product from '../Product/Product';
import { connect } from 'react-redux';
import fetchProducts from '../../store/products/actions';
import './ProductList.scss';

const ProductList = ({ getAllProducts, allProducts }) => {
  useEffect(() => {
    if (allProducts.length === 0) {
      getAllProducts();
    }
  }, [getAllProducts, allProducts]);

  const products = allProducts.map((product) => {
    return (
          <li key={product._id}>
              <Product />
          </li>
    );
  });

  return (
    <>
        <ul className='products__list'>

        { products}
        </ul>
      
     </>
  );
};

const mapStateToProps = (state) => {
  return {
    allProducts: state.allProducts
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAllProducts: () => dispatch(fetchProducts())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
