import React, { useEffect, useState } from 'react'
import './SelectColor.scss'
import { connect, useSelector } from 'react-redux';
import { getColor } from '../../api/getColor';
import { setColorArray } from '../../store/productColorPage/actions';

const SelectColor = ({selectedProduct, arrayColor, arrayProduct, setColorArrayAction}) => {
  const [localStateColor, setLocalStateColor] = useState()
  useEffect(() => {
    if (arrayProduct) {
      console.log(arrayProduct)
      const colorArray = [];
      arrayProduct.forEach((product, index) => {
        getColor(product.color)
          .then(value => {
            colorArray.push(value.data)
            setColorArrayAction(colorArray)
            setLocalStateColor(arrayColor)
          })
      })
    }
  }, [])
  return (
    <div className='select'>
      <h3 className='select__title'>Color</h3>
      <div className="color-container">
        {arrayColor
          ? arrayColor.map((color, id) => {
            console.log('cssvalue', color)
            return <div
              id={id}
              style={{backgroundColor: color.cssValue}}
              className="select__color">
            </div>
          })
          : <>ERROR</>}
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    selectedProduct: state.selectedProduct,
    arrayProduct: state.identicProduct.arrayProduct,
    arrayColor: state.identicProduct.arrayColor
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setColorArrayAction: (product) => dispatch(setColorArray(product)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectColor);
