import React from 'react';
import Advantages from '../../components/Advantages/Advantages';
import Baner from '../../components/Baners/Baner'
import Button from '../../components/Button/Button';
import GuideToFavoriteLooks from '../../components/GuideToFavoriteLooks/GuideToFavoriteLooks';
import JoingMailing from '../../components/JoingMailing/JoingMailing';
import { banerImagesDictionary, banerTextDictionary, banerTitleDictionary } from '../../dictionary/banerDictionary'
import BlogMainContent from '../../containers/BlogMainContent';
import Botanical from '../../components/Botanical';
import BlockImagesHome from '../../components/BlockImagesHome/BlockImagesHome';
import BestSellers from '../../components/BestSellers';
import BanerCarousel from '../../components/BanerCarousel/BanerCarousel';

const MainPage = () => {
  return (
    <>
      <BanerCarousel/>
      <BlockImagesHome/>
      <Botanical/>
      <GuideToFavoriteLooks/>
      <BestSellers/>
      <Advantages/>
      <BlogMainContent/>
      <JoingMailing/>
    </>
  );
};

export default MainPage;
