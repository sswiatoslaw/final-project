import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import fetchProducts from '../../store/products/actions';
import { Pagination } from 'antd';
import ProductList from '../../components/ProductList/ProductList';
import './ProductContent.scss'

function ProductContent ({ getAllProducts, allProducts }) {
  // const [isLoading, setLoading] = useState(true)
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(8);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  useEffect(() => {
    if (allProducts.length === 0) {
      getAllProducts();
    }
  }, [getAllProducts, allProducts]);

  const onPaginationChange = (page) => {
    setCurrentPage(page)
  }
  
  return (
    <>
      <div className='wrapper'>
        <ProductList products={currentProducts} setProducts={setProducts}/>
      </div>

      <Pagination total={products.length}
        current={currentPage}
        pageSize={8}
        onChange={onPaginationChange}
      />
      
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

export default connect(mapStateToProps, mapDispatchToProps)(ProductContent);
