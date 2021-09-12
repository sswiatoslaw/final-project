import React, {useEffect, useRef} from 'react'
import { connect } from 'react-redux';
import './FilterWrapper.scss'
import FilterPrice from '../FilterPrice/FilterPrice';
import Button from '../../Button/Button';
import { Layout, Menu, Checkbox } from 'antd';
import {category} from '../../../store/category/action'
import {sizes} from '../../../store/sizes/action'
import { getSizes } from '../../../api/getSizes';
import { getCategory } from '../../../api/getCategory'
import { getProductsByFilters } from '../../../store/products/actions';
import { filterProducts } from '../../../store/Filter/action';
import { getColors } from '../../../api/getColors';
import { setColor } from '../../../store/color/action';
const { SubMenu } = Menu;
const { Sider } = Layout;

const FilterWrapper = ({ addToSizes, addToCategory, addToColors, categories, color, size, filter, getProducts, addProductsByFilters, onClick, toogleClick }) => {
  const checkbox = useRef()
  useEffect(() => {
    getCategory().then((response) => response).then((response) => addToCategory(response.data))
    getSizes().then((response) => addToSizes(response.data))
    getColors().then((response) => addToColors(response.data))
  }, [addToCategory, addToSizes, addToColors, addProductsByFilters])
  
  const handleChangeCheckbox = (e, filterName, checkbox) => {
    addProductsByFilters({...filter, [filterName]: e})
  }
  const handleChangeFilterProducts = () => {
    getProducts()
  }
  const ClearFilteredProducts = (checkbox) => {
    addProductsByFilters({})
    getProducts()
  }
  const categoriesOptions = categories.map((elem, index) => elem.id)
  const sizesOptions = size.map((elem, index) => elem.name)
  const colorsOptions = color.map((elem, index) => elem.name)
  return (
    
           <Sider className={'site-layout-background'} width={280}>
          <Menu
            mode='inline'
            defaultOpenKeys={['sub2', 'sub3', 'sub5']}
            style={{ height: '100%' }}
          >
            
            <SubMenu key='sub2' title='Category'>
                     <Checkbox.Group ref={checkbox}
                    className={'checkbox__container'} options={categoriesOptions} onChange={(e) => handleChangeCheckbox(e, 'categories', checkbox)} />
            </SubMenu>
            <SubMenu key='sub3' title='Size'>
                <Checkbox.Group className={'checkbox__container'} options={sizesOptions} onChange={(e) => handleChangeCheckbox(e, 'sizes')} />
            </SubMenu>
            <SubMenu key='sub4' title='Color'>
                <Checkbox.Group className={'checkbox__container'} options={colorsOptions} onChange={(e) => handleChangeCheckbox(e, 'color')} />
            </SubMenu>
            <SubMenu key='sub5' title='Цена , USD'>
            <FilterPrice/>
            <Button text='Find' width='90%' minWidth='240px' height='40px' borderRadius='8px' onClick={(() => { handleChangeFilterProducts(); onClick() })} />
            <Button text='Reset' width='90%' minWidth='240px' height='40px' borderRadius='8px' onClick={(() => { ClearFilteredProducts(checkbox); toogleClick() })} />
            </SubMenu>
          </Menu>
        </Sider>
  )
}

const mapStateToProps = (state) => {
  return {
    categories: state.category,
    size: state.sizes,
    color: state.color,
    filter: state.filter
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCategory: (elem) => dispatch(category(elem)),
    addToSizes: (elem) => dispatch(sizes(elem)),
    getProducts: (elem) => dispatch(getProductsByFilters(elem)),
    addProductsByFilters: (elem) => dispatch(filterProducts(elem)),
    addToColors: (elem) => dispatch(setColor(elem))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterWrapper)
