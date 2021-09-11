import { connect } from 'react-redux';
import Baner from '../Baners/Baner';
import { banerImagesDictionary, banerTextDictionary, banerTitleDictionary } from '../../dictionary/banerDictionary'
import Button from '../../components/Button/Button';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import './BanerCarousel.scss'

const BanerCarousel = () => {
  return (
    <>
      <div>
       
           <Carousel>
            <Baner imgPath={ banerImagesDictionary.main } imgName='woman with child' minHeight='742px' maxHeight='806px'
             title={ banerTitleDictionary.mainTitle } textBottom={ banerTextDictionary.mainTextBottom } children={ <Button modifier='contained' text='Shop now'
                                                                                                                           width='280px'
                                                                                                                           minWidth='335px'
      /> }/>
            <Baner imgPath={ banerImagesDictionary.main } imgName='woman with child' minHeight='742px' maxHeight='806px'
             title={ banerTitleDictionary.mainTitle } textBottom={ banerTextDictionary.mainTextBottom } children={ <Button modifier='contained' text='Shop now'
                                                                                                                           width='280px'
                                                                                                                           minWidth='335px'
      /> }/>
            <Baner imgPath={ banerImagesDictionary.main } imgName='woman with child' minHeight='742px' maxHeight='806px'
             title={ banerTitleDictionary.mainTitle } textBottom={ banerTextDictionary.mainTextBottom } children={ <Button modifier='contained' text='Shop now'
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
