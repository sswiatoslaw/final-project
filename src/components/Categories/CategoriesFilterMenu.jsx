import { Menu } from 'antd';
import React from 'react';
import { AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import goods from './test.json';
import './CategoriesFilterMenu.scss';

const CategoriesFilterMenu = () => {
  const { SubMenu } = Menu;

  const filterGoods = (person) => goods.filter((item) => item.id === person);

  const getItems = (arr) => {
    const items = arr.map((item) => <Menu.Item key={item._id}>{item.name}</Menu.Item>);
    return items;
  };

  return (
    <div className='category-filter_menu'>
      <Menu mode="horizontal" style={{borderBottom: 'none'}}>
        <SubMenu key="1" title="One-pieces">
          {getItems(filterGoods('women'))}
        </SubMenu>
      </Menu>

      <Menu mode="horizontal"style={{borderBottom: 'none'}}>
        <SubMenu key="2" title="Feeding">
          {getItems(filterGoods('baby'))}
        </SubMenu>
      </Menu>
      <Menu mode="horizontal" style={{borderBottom: 'none'}}>
        <SubMenu key="3" title="Both & body">
          {getItems(filterGoods('women'))}
        </SubMenu>
      </Menu>
      <Menu mode="horizontal" style={{borderBottom: 'none'}}>
        <SubMenu key="4" title="Accessories">
          {getItems(filterGoods('baby'))}
        </SubMenu>
      </Menu>
      <Menu mode="horizontal" style={{borderBottom: 'none'}}>
        <SubMenu key="5" title="Tops & bottoms">
          {getItems(filterGoods('women'))}
        </SubMenu>
      </Menu>
      <Menu mode="horizontal" style={{borderBottom: 'none'}}>
        <SubMenu key="6" title="Nursery">
          {getItems(filterGoods('baby'))}
        </SubMenu>
      </Menu>
    </div>
  );
};

export default CategoriesFilterMenu;
