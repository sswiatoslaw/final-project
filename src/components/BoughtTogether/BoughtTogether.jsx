import React, { useState, useEffect} from 'react';
import { connect } from 'react-redux';
import Product from '../Product/Product';
import './BoughtTogether.scss'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const BoughtTogether = ({ allProducts }) => {
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

  const boughtItems = products.slice(10, 26).map((product) =>
    <Product className='bought__item' product={product} key={product.itemNo}/>
  );

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      }
    ]
  };

  return (
    <>
      <div className='wrapper'>
       <section className='product__list bought' >
         <h2 className='bought__title'>Frequently Bought Together</h2>
           <Slider {...settings}>
            <ul className='product__item'></ul>
            {boughtItems}
           </Slider>
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

export default connect(mapStateToProps)(BoughtTogether);
