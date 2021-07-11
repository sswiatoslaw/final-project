
import Product from '../Product/Product';
import PropTypes from 'prop-types';
import './ProductList.scss';
import { useSelector, useDispatch } from 'react-redux';
import { changeModalState, setModalHeader } from '../../store/modal/actions'
import { changeProductList } from '../../store/products/actions'
import { getProduct, getModalState, getCurrentModal, getModalAddOrDeleteValue } from '../../store/modal/selectors'
import { getProducts } from '../../store/products/selectors'
import { useEffect } from 'react';

const ProductList = ({productsAtPage, cart = false}) => {
  const dispatch = useDispatch()
  const products = useSelector(getProducts)
  const product = useSelector(getProduct)
  //   const isActive = useSelector(getModalState)
  //   const currentModal = useSelector(getCurrentModal)
  const modalAddOrDeleteValue = useSelector(getModalAddOrDeleteValue)
  
  const addToCart = () => {
    dispatch(changeModalState(false))
      
    const newProducts = products.map(elem => {
      if (elem.itemNo === product.itemNo) {
        elem.amountAtCart++
      }
      return elem
    })
    
    dispatch(changeProductList(newProducts))
    let cart = JSON.parse(localStorage.getItem('cart')) || []
    cart = newProducts.filter(elem => elem.amountAtCart !== 0)
    localStorage.setItem('cart', JSON.stringify(cart))
  }
    
  const deleteFromCart = () => {
    dispatch(changeModalState(false))
      
    const newProducts = products.map(elem => {
      if (elem.itemNo === product.itemNo) {
        elem.amountAtCart--
      }
      return elem
    })
    dispatch(changeProductList(newProducts))

    let cart = JSON.parse(localStorage.getItem('cart')) || []
    cart = newProducts.filter(elem => elem.amountAtCart !== 0)
    localStorage.setItem('cart', JSON.stringify(cart))
  }

  const closeModal = () => {
    dispatch(changeModalState(false))
  }

  useEffect(() => {
    dispatch(setModalHeader(modalAddOrDeleteValue, product.title))
  }, [modalAddOrDeleteValue, product.title, dispatch]);

  return (
    <>
      {cart && <h4>Items at cart:</h4>}
      <ul className='listItemsWrapper'>
        {productsAtPage.map((el, index) => {
          return <Product
                    key={index}
                    product={el}
                />
        })}
      </ul>
      
     </>
  );
}

export default ProductList;

ProductList.propTypes = {
  productsAtPage: PropTypes.arrayOf(PropTypes.object).isRequired,
}
