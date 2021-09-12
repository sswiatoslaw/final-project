import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Product from '../Product/Product';
import './ProductList.scss';

const ProductList = ({ allProducts, filter }) => {
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
          {(!products.length && Object.keys(filter).length !== 0
            ? <div className='product__item_not_found'>Sorry, product not found</div>
            : products.map((product) => {
              return (
              <Product product={ product } key={ product.itemNo }/>
              )
            }))}
        </ul>
      </section>
    </>
  )
};

const mapStateToProps = (state) => {
  return {
    allProducts: state.products.allProducts,
    filter: state.filter
  };
};

export default connect(mapStateToProps)(ProductList);