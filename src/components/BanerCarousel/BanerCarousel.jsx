import { connect } from 'react-redux';
import Banner from '../Banners/Banner';
import { bannerImagesDictionary, bannerTextDictionary, bannerTitleDictionary } from '../../dictionary/bannerDictionary';
import Button from '../../components/Button/Button';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import './BanerCarousel.scss'

const BanerCarousel = () => {
  return (
    <>
      <div>
       
           <Carousel>
            <Banner imgPath={ bannerImagesDictionary.main } imgName='woman with child' minHeight='742px' maxHeight='806px'
             title={ bannerTitleDictionary.mainTitle } textBottom={ bannerTextDictionary.mainTextBottom } children={ <Button modifier='contained' text='Shop now'
                                                                                                                           width='280px'
                                                                                                                           minWidth='335px'
      /> }/>
            <Banner imgPath={ bannerImagesDictionary.main } imgName='woman with child' minHeight='742px' maxHeight='806px'
             title={ bannerTitleDictionary.mainTitle } textBottom={ bannerTextDictionary.mainTextBottom } children={ <Button modifier='contained' text='Shop now'
                                                                                                                           width='280px'
                                                                                                                           minWidth='335px'
      /> }/>
            <Banner imgPath={ bannerImagesDictionary.main } imgName='woman with child' minHeight='742px' maxHeight='806px'
             title={ bannerTitleDictionary.mainTitle } textBottom={ bannerTextDictionary.mainTextBottom } children={ <Button modifier='contained' text='Shop now'
                                                                                                                           width='280px'
                                                                                                                           minWidth='335px'
      /> }/>
           </Carousel>
       </div>
    </>
  )
};

const mapStateToProps = (state) => {
  return {
    allProducts: state.allProducts
  };
};

export default connect(mapStateToProps)(BanerCarousel);
