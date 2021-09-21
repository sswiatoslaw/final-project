import React from 'react';
import './ShopPage.scss'
import Baner from '../../components/Baners/Baner';
import JoingMailing from '../../components/JoingMailing/JoingMailing';
import { banerImagesDictionary, banerTextDictionary, banerTitleDictionary } from '../../dictionary/banerDictionary';
import FilterResponsive from '../../components/Filter/FilterResponsive/FilterResponsive';
import ProductList from '../../components/ProductList/ProductList';
import Sort from '../../components/Sort/Sort';
import { Layout } from 'antd';
import useWindowSize from '../../сustomHooks/useWindowSize';

const ShopPage = () => {
  const size = useWindowSize();
  return (
    <div>
      <Baner imgPath={banerImagesDictionary.shop} imgName='Baby girl shop' title={banerTitleDictionary.shopTitle}
             textBottom={banerTextDictionary.shopTextBottom} />
             <Layout>
             <FilterResponsive/>
             <Layout style={{backgroundColor: 'transparent'}}>
            {(size.width >= 769 ? <Sort/> : '')}
               <ProductList />
               </Layout>
               </Layout>
      <JoingMailing />
    </div>
  );
};

export default ShopPage;
