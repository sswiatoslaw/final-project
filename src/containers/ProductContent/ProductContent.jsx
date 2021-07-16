import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import fetchProducts from '../../store/products/actions';
import ProductList from '../../components/ProductList/ProductList';

function ProductContent ({ getAllProducts, allProducts }) {
  useEffect(() => {
    if (allProducts.length === 0) {
      getAllProducts();
    }
  }, [getAllProducts, allProducts]);

  return (
    <div className='wrapper'>
      <ProductList/>

    </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(ProductContent);