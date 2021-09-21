import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import './BanerCarousel.scss'

const BanerCarousel = () => {
  const history = useHistory();
  const onClickItemEvent = (item) => {
    if (item === 0) {
      history.push('/new-collection');
    } else if (item === 1) {
      history.push('/sale-now');
    } else if (item === 2) {
      history.push('/knitting-collection');
    }
  }

  return (
    <>
      <div>
       
           <Carousel showStatus={false} onClickItem={onClickItemEvent}>
            
            <div className='carousel__image slide1'>
                <img src='https://savvy-tots.s3.eu-west-3.amazonaws.com/carusel/slide-002.jpeg' alt='new-season'/>
            </div>
            
            <div className='carousel__image slide2'>
                 <img src='https://savvy-tots.s3.eu-west-3.amazonaws.com/carusel/slide-003.jpeg' alt='sale-now'/>
            </div>
            <div className='carousel__image slide3'>
                <img src='https://savvy-tots.s3.eu-west-3.amazonaws.com/carusel/slide-004.jpeg' alt='knitting-collection'/>
                <p className='carousel__image--title'>Knitting Collection 2022</p>
            </div>
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