import React from 'react';
import './ShopPage.scss'
import Baner from '../../components/Baners/Baner';
import JoingMailing from '../../components/JoingMailing/JoingMailing';
import { banerImagesDictionary, banerTextDictionary, banerTitleDictionary } from '../../dictionary/banerDictionary';
import FilterResponsive from '../../components/Filter/FilterResponsive/FilterResponsive';
import ProductList from '../../components/ProductList/ProductList';

const ShopPage = () => {
  return (
    <div>
      <Baner imgPath={banerImagesDictionary.shop} imgName='Baby girl shop' title={banerTitleDictionary.shopTitle}
             textBottom={banerTextDictionary.shopTextBottom} />
             <div className={'shop__page shop__page__content'}>
             <FilterResponsive/>
      <ProductList />
      </div>
      <JoingMailing />
    </div>
  );
};

export default ShopPage;
