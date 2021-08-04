import { Link, Route, Switch, useRouteMatch} from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import moment from 'moment'
import './BlogCard.scss';
const BlogCard = ({slide}) => {
  const match = useRouteMatch()
  return (
 <>
  <div className='blog__card'>
    
      <li key={slide._id}>
      <Link to={`${match.url}/post`}>
                        <img className='blog__card--image' src={slide.imageUrl} alt='card-blog' width='380' height='380'/>
                        <div className='blog__card--date'>{moment(slide.date).format('ll')}</div>
                        <div className='blog__card--title'>{slide.title}</div>
                        </Link>
      </li>
     
  </div>
  
</>
  )
}

const mapStateToProps = (state) => {
  return {
    allSlides: state.allSlides
  };
};

export default connect(mapStateToProps)(BlogCard);

BlogCard.propTypes = {
  slide: PropTypes.exact({
    _id: PropTypes.string,
    customId: PropTypes.string,
    imageUrl: PropTypes.string,
    date: PropTypes.object,
    title: PropTypes.string,
  }).isRequired
}