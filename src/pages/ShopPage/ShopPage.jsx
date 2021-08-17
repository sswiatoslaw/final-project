import React from 'react';
import Baner from '../../components/Baners/Baner';
import JoingMailing from '../../components/JoingMailing/JoingMailing';
import { banerImagesDictionary, banerTextDictionary, banerTitleDictionary } from '../../dictionary/banerDictionary';
// import ProductList from '../../components/ProductList/ProductList';
import ProductContent from './../../containers/ProductContent/ProductContent';

const ShopPage = () => {
  return (
    <div>
      <Baner imgPath={banerImagesDictionary.shop} imgName='Baby girl shop' title={banerTitleDictionary.shopTitle}
             textBottom={banerTextDictionary.shopTextBottom} />
      <ProductContent />
      <JoingMailing />
    </div>
  );
};

export default ShopPage;
