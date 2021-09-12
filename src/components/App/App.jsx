import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import fetchProducts from '../../store/products/actions';
import Routes from '../Routes';
import './App.scss';

function App ({ getAllProducts }) {
  useEffect(() => {
    getAllProducts();
  }, [getAllProducts]);

  return (
    <div className='App'>
      <Routes />
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    getAllProducts: () => dispatch(fetchProducts())
  };
};

export default connect(null, mapDispatchToProps)(App);