import React from 'react';
import img1 from './images/image1.jpg'
import img2 from './images/image2.jpg'
import img3 from './images/image3.jpg'
import './BlockImagesHome.scss'

const BlockImagesHome = () => {
  return (
 <>
  <div className='wrapper'>
    
      <ul className='block__items'>
        <li><img className='block__item--image' src={img1} alt='card-blog' width='380' height='380'/></li>
        <li><img className='block__item--image' src={img2} alt='card-blog' width='380' height='380'/></li>
        <li><img className='block__item-image' src={img3} alt='card-blog' width='380' height='380'/></li>
      </ul>
     
  </div>
</>
  )
}

export default BlockImagesHome

// BlogCard.propTypes = {
//   slide: PropTypes.exact({
//     _id: PropTypes.string,
//     customId: PropTypes.string,
//     imageUrl: PropTypes.string,
//     date: PropTypes.object,
//     title: PropTypes.string,
//   }).isRequired
// }