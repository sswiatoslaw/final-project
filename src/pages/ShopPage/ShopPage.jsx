import React from 'react';
import './ShopPage.scss'
import Baner from '../../components/Baners/Baner';
import JoingMailing from '../../components/JoingMailing/JoingMailing';
import { banerImagesDictionary, banerTextDictionary, banerTitleDictionary } from '../../dictionary/banerDictionary';
import ProductList from '../../components/ProductList/ProductList';
import FilterWrapper from '../../components/Filter/FilterWrapper/FilterWrapper';
import MobileFilterWrapper from '../../components/Filter/MobileFilterWrapper/MobileFilterWrapper';
import FilterResponsive from '../../components/Filter/FilterResponsive/FilterResponsive';

const ShopPage = () => {
  return (
    <div>
      <Baner imgPath={banerImagesDictionary.shop} imgName='Baby girl shop' title={banerTitleDictionary.shopTitle}
             textBottom={banerTextDictionary.shopTextBottom} />
             <div className={'shop__page shop__page__content'}>
             {/* <FilterWrapper/> */}
             {/* <MobileFilterWrapper/> */}
             <FilterResponsive/>
      <ProductList />
      </div>
      <JoingMailing />
    </div>
  );
};

export default ShopPage;
