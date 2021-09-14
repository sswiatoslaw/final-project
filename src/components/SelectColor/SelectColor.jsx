import React, { useEffect, useState } from 'react'
import './SelectColor.scss'
import { connect } from 'react-redux';
import { getProducts } from '../../api/getProducts';
import { setProductColor } from '../../store/productColorPage/actions';
import { getColors } from '../../api/getColors';

const SelectColor = ({selectedProduct, identicProduct, setProductColor}) => {
  const [array, setArray] = useState();
  const [colors, setColors] = useState();
  useEffect(() => {
    getColors().then(res => {
      setColors(res.data)
    })
  }, [])
  return (
    <div className='select'>
      <h3 className='select__title'>Color</h3>
      <div className="color-container">
        {colors && colors.map((product, id) => {
          const currentColorHex = undefined;
          return (<div
            className='select__color'
            style={{backgroundColor: product.cssValue}}>
          </div>)
        }
        )}
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    selectedProduct: state.selectedProduct,
    identicProduct: state.identicProduct
  };
};

export default connect(mapStateToProps)(SelectColor);
