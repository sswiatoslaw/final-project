import React from 'react';
import './ShopPage.scss'
import Banner from '../../components/Banners/Banner';
import JoingMailing from '../../components/JoingMailing/JoingMailing';
<<<<<<< HEAD
import { bannerImagesDictionary, bannerTextDictionary, bannerTitleDictionary } from '../../dictionary/bannerDictionary';
||||||| 01e9988
import { banerImagesDictionary, banerTextDictionary, banerTitleDictionary } from '../../dictionary/banerDictionary';
=======
import { bannerImagesDictionary, bannerTextDictionary, bannerTitleDictionary } from '../../dictionary/banerDictionary';
>>>>>>> 093e7e2629187c565eaacba5c5df474aa40bd5ca
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
