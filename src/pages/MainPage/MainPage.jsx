import React from 'react';
import Advantages from '../../components/Advantages/Advantages';
import GuideToFavoriteLooks from '../../components/GuideToFavoriteLooks/GuideToFavoriteLooks';
import JoingMailing from '../../components/JoingMailing/JoingMailing';
import BlogMainContent from '../../containers/BlogMainContent';
import Botanical from '../../components/Botanical';
import BlockImagesHome from '../../components/BlockImagesHome/BlockImagesHome';
import BestSellers from '../../components/BestSellers';
import BannerCarousel from '../../components/BannerCarousel/BannerCarousel';

const MainPage = () => {
  return (
    <>
      <BannerCarousel/>
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
