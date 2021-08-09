import React from 'react';
import Advantages from '../../components/Advantages/Advantages';
import Baner from '../../components/Baners/Baner'
import Button from '../../components/Button/Button';
import GuideToFavoriteLooks from '../../components/GuideToFavoriteLooks/GuideToFavoriteLooks';
import JoingMailing from '../../components/JoingMailing/JoingMailing';
import {banerImagesDictionary, banerTitleDictionary, banerTextDictionary} from '../../dictionary/banerDictionary'
import BlogMainContent from '../../containers/BlogMainContent';
import Botanical from '../../components/Botanical';
import BestSellersContent from '../../containers/BestSellersContent';
import BlockImagesHome from '../../components/BlockImagesHome/BlockImagesHome';

const MainPage = () => {
  return (
<>
  <Baner imgPath={banerImagesDictionary.main} imgName='woman with child' minHeight='742px' maxHeight='806px'
         title={banerTitleDictionary.mainTitle} textBottom={banerTextDictionary.mainTextBottom} children={<Button modifier='contained' text='Shop now'
                                                                                                       width='280px'
                                                                                                       minWidth='335px'
  />} />

  <BlockImagesHome/>
  <Botanical/>
  <GuideToFavoriteLooks/>
  <BestSellersContent/>
  <Advantages/>
  <BlogMainContent/>
  <JoingMailing/>
</>
  );
};

export default MainPage;
