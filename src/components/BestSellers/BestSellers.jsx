import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Product from '../Product/Product';
import Button from '../Button/Button';
import './BestSellers.scss';

const BestSellers = ({ allProducts }) => {
  const [products, setProducts] = useState([]);
  const [visible, setVisible] = useState(4);

  const viewAllProducts = () => {
    setVisible((prevValue) => prevValue + allProducts.length);
  };
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
      <div className='wrapper'>
       <section className='product__list'>
         <h2 className='bestsellers__title'>BEST SELLERS</h2>
            <ul className='product__item'>
              {products.slice(0, visible).map((product) => (
                <Product product={product} key={product.itemNo}/>
              ))}
           </ul>
           <Button onClick={viewAllProducts} modifier='contained' text='View all' width='280px'/>
        </section>
      </div>
    </>
  )
};

const mapStateToProps = (state) => {
  return {
    allProducts: state.allProducts
  };
};

export default connect(mapStateToProps)(BestSellers);
