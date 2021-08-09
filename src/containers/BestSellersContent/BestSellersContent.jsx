import React, { useEffect} from 'react';
import { connect } from 'react-redux';
import fetchProducts from '../../store/products/actions';
import BestSellers from '../../components/BestSellers';

function BestSellersContent ({ getAllProducts, allProducts }) {
  useEffect(() => {
    if (allProducts.length === 0) {
      getAllProducts();
    }
  }, [getAllProducts, allProducts]);

  return (
    <>
      <BestSellers/>
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

export default connect(mapStateToProps, mapDispatchToProps)(BestSellersContent);