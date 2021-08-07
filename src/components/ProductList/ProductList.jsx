import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Product from '../Product/Product';
import './ProductList.scss';

const ProductList = ({ allProducts }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(() => {
      const productsNameList = [];
      allProducts.forEach(item => {
        if (!productsNameList.find(el => el.name === item.name && item.color)) {
          productsNameList.push(item)
        }
      })
      return productsNameList
    })
  }, [allProducts]);

  return (
    <>
      <section className='product__list'>
        <ul className='product__item'>

          { products.map((product) => {
            return (
              <Product product={ product } key={ product.itemNo }/>
            )
          }) }
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