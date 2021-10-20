import React from 'react';
import Banner from '../../components/Banners/Banner';
import JoingMailing from '../../components/JoingMailing/JoingMailing';
import { bannerImagesDictionary, bannerTextDictionary, bannerTitleDictionary } from '../../dictionary/bannerDictionary';
// import FilterResponsive from '../../components/Filter/FilterResponsive/FilterResponsive';
// import ProductList from '../../components/ProductList/ProductList';
// import Sort from '../../components/Sort/Sort';
// import { Layout } from 'antd';
// import useWindowSize from '../../сustomHooks/useWindowSize';
import ProductContent from './../../containers/ProductContent/ProductContent';

const ShopPage = () => {
  return (
    <div>
      <Banner imgPath={bannerImagesDictionary.shop} imgName='Baby girl shop' title={bannerTitleDictionary.shopTitle}
             textBottom={bannerTextDictionary.shopTextBottom} />
      <ProductContent />
      <JoingMailing />
    </div>
  );
};

export default ShopPage;
