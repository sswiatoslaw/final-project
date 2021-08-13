import React, { useEffect} from 'react';
import { connect } from 'react-redux';
import fetchProducts from '../../store/products/actions';
import Botanical from '../../components/Botanical';

function BotanicalContent ({ getAllProducts, allProducts }) {
  useEffect(() => {
    if (allProducts.length === 0) {
      getAllProducts();
    }
  }, [getAllProducts, allProducts]);

  return (
    <>
      <Botanical/>
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

export default connect(mapStateToProps, mapDispatchToProps)(BotanicalContent);