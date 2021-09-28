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
      {/* <Baner imgPath={ banerImagesDictionary.main } imgName='woman with child' minHeight='742px' maxHeight='806px'
             title={ banerTitleDictionary.mainTitle } textBottom={ banerTextDictionary.mainTextBottom } children={ <Button modifier='contained' text='Shop now'
                                                                                                                           width='280px'
                                                                                                                           minWidth='335px'
      /> }/> */}
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
