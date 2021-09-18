import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Product from '../Product/Product';
import Button from '../Button/Button';
import './Botanical.scss';

const Botanical = ({ allProducts }) => {
  const [products, setProducts] = useState([]);
  const [visible, setVisible] = useState(7);

  const viewAllProducts = () => {
    setVisible((prevValue) => prevValue + 4);
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
       <section className='botanical product__list'>
         <h2 className='botanical__title'>BOTANICAL</h2>
            <ul className='product__item'>
              {products.slice(3, visible).map((product) => (
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
    allProducts: state.products.allProducts
  };
};

export default connect(mapStateToProps)(Botanical);
