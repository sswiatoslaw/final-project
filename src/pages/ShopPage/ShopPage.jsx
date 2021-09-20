import React from 'react';
import './ShopPage.scss'
import Banner from '../../components/Banners/Banner';
import JoingMailing from '../../components/JoingMailing/JoingMailing';
import { bannerImagesDictionary, bannerTextDictionary, bannerTitleDictionary } from '../../dictionary/banerDictionary';
import FilterResponsive from '../../components/Filter/FilterResponsive/FilterResponsive';
import ProductList from '../../components/ProductList/ProductList';
import Sort from '../../components/Sort/Sort';
import { Layout } from 'antd';
import useWindowSize from '../../сustomHooks/useWindowSize';

const ShopPage = () => {
  const size = useWindowSize();
  return (
    <div>
      <Banner imgPath={bannerImagesDictionary.shop} imgName='Baby girl shop' title={bannerTitleDictionary.shopTitle}
             textBottom={bannerTextDictionary.shopTextBottom} />
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
