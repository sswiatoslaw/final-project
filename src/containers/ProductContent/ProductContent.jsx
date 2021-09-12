import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import fetchProducts from '../../store/products/actions';
import Pagination from '../../components/Pagination/Pagination';
import ProductList from '../../components/ProductList/ProductList';

function ProductContent ({ getAllProducts, allProducts }) {
  // const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(20);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = allProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  useEffect(() => {
    if (allProducts.length === 0) {
      getAllProducts();
    }
  }, [getAllProducts, allProducts]);

  return (
    <>
      <div className='wrapper'>
        <ProductList products={currentProducts}/>
      </div>
      
      <Pagination
        productsPerPage={productsPerPage}
        allProducts={allProducts.length}
        paginate={paginate}
      />
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    allProducts: state.products.allProducts
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAllProducts: () => dispatch(fetchProducts())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductContent);