import React, {useEffect, useState} from 'react'
import { connect } from 'react-redux';
import './FilterWrapper.scss'
import FilterPrice from '../FilterPrice/FilterPrice';
import Button from '../../Button/Button';
import { Layout, Menu, Checkbox } from 'antd';
import { ManOutlined, WomanOutlined } from '@ant-design/icons';
import {category} from '../../../store/category/action'
import {sizes} from '../../../store/sizes/action'
import { getSizes } from '../../../api/getSizes';
import { getCategory } from '../../../api/getCategory'
const { SubMenu } = Menu;
const { Sider } = Layout;

const FilterWrapper = ({ addToSizes, addToCategory, categories, size, addToFilters }) => {
  useEffect(() => {
    getCategory().then((response) => response).then((response) => addToCategory(response.data))
    getSizes().then((response) => addToSizes(response.data))
  }, [addToCategory, addToSizes])
  
  const [checkbox, setCheckbox] = useState({})
  const renderArrayElements = (elem, index) => {
    return (
        <Checkbox name={elem.name} key={index} onChange={a}>{elem.name}</Checkbox>
    )
  }
  const a = (e) => {
    setCheckbox({name: e.target.name, status: e.target.checked})
  }

  return (
           <Sider className={'site-layout-background'} width={280}>
          <Menu
            mode='inline'
            defaultOpenKeys={['sub1', 'sub2', 'sub3', 'sub5']}
            style={{ height: '100%' }}
          >
            <SubMenu key='sub1' title='Пол'>
              <Menu.Item icon={<ManOutlined />} key='1'>Мальчик</Menu.Item>
              <Menu.Item icon={<WomanOutlined />} key='2'>Девочка</Menu.Item>
            </SubMenu>
            <SubMenu key='sub2' title='Категории'>
                <div className={'checkbox__container'}>
                  {categories.map((elem, index) => renderArrayElements(elem, index))}
              </div>
            </SubMenu>
            <SubMenu key='sub3' title='Размер'>
                <div className={'checkbox__container'}>
                  {size.map((elem, index) => renderArrayElements(elem, index))}
              </div>
            </SubMenu>
            <SubMenu key='sub4' title='Цвет'>
                <div className={'checkbox__container'}>
             
              </div>
            </SubMenu>
            <SubMenu key='sub5' title='Цена , USD'>
            <FilterPrice button={<Button text='ok' minWidth='40px' width='40px' height='30px' borderRadius='8px' onClick={() => {}} />}/>
            </SubMenu>
          </Menu>
        </Sider>
  )
}

const mapStateToProps = (state) => {
  return {
    categories: state.category,
    size: state.sizes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCategory: (elem) => dispatch(category(elem)),
    addToSizes: (elem) => dispatch(sizes(elem)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterWrapper)
