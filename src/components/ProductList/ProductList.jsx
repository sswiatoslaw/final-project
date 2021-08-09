import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Product from '../Product/Product';
import './ProductList.scss';
import { addFavoritesAction, addItemToFavoriteAction, removeItemFromFavoriteAction } from '../../store/favorite/actions';

const ProductList = ({ allProducts, favorite, addFavoritesAction, addItemToFavoriteAction, removeItemFromFavoriteAction }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const localStoreFromFavorite = localStorage.getItem('favorite') === null ? [] : Array.from(JSON.parse(localStorage.getItem('favorite')))
    if (localStoreFromFavorite.length !== 0) {
      addFavoritesAction(localStoreFromFavorite)
    }
  }, [addFavoritesAction])

  useEffect(() => {
    setProducts(() => {
      const productsNameList = [];
      allProducts.forEach(item => {
        if (!productsNameList.find(el => el.name === item.name)) {
          productsNameList.push(item)
        }
      })
      return productsNameList
    })
  }, [allProducts]);

  const onToggleImportant = (itemNo) => {
    if (favorite.includes(itemNo)) {
      removeItemFromFavoriteAction(itemNo);
    } else {
      addItemToFavoriteAction(itemNo)
    }
  }

  return (
    <>
      <section className='product__list'>
        <ul className='product__item'>

          { products.map((product) => {
            return (
              <Product product={ product } key={ product.itemNo } onToggleImportant={ () => onToggleImportant(product.itemNo) }/>
            )
          }) }
        </ul>
      </section>
    </>
  )
};

const mapStateToProps = (state) => {
  return {
    allProducts: state.allProducts,
    favorite: state.favorite
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeItemFromFavoriteAction: (itemNo) => dispatch(removeItemFromFavoriteAction(itemNo)),
    addItemToFavoriteAction: (itemNo) => dispatch(addItemToFavoriteAction(itemNo)),
    addFavoritesAction: (arr) => dispatch(addFavoritesAction(arr)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);