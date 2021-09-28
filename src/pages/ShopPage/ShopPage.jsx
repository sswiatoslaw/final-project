import React from 'react';
import Banner from '../../components/Banners/Banner';
import JoingMailing from '../../components/JoingMailing/JoingMailing';
import { bannerImagesDictionary, bannerTextDictionary, bannerTitleDictionary } from '../../dictionary/bannerDictionary';
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
