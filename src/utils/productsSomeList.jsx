// import React, { useEffect, useState } from 'react';
// import Loading from '../components/Loading/Loading';
import { connect } from 'react-redux';

const productSomeList = ({allProducts}) => {
  // const [isLoading, setLoading] = useState(true)
  // const [products, setProducts] = useState([]);
 
  const productsNameList = [];
  allProducts.forEach(item => {
    if (!productsNameList.find(el => el.name === item.name)) {
      productsNameList.push(item)
    }
    // setLoading(false)
  })
  // console.log('', productsNameList)
  return productsNameList
}

const mapStateToProps = (state) => {
  return {
    allProducts: state.products.allProducts,
    filter: state.filter,
    favorite: state.favorite,
  };
};

export default connect(mapStateToProps)(productSomeList);