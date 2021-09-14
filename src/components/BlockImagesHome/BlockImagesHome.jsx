import React from 'react';
import './BlockImagesHome.scss'

const BlockImagesHome = () => {
  return (
 <>
  <div className='wrapper'>
    
      <ul className='block__items'>
        <li><img className='block__item--image' src='https://savvy-tots.s3.eu-west-3.amazonaws.com/block-images-home/001.jpeg' alt='card-blog' width='380' height='380'/></li>
        <li><img className='block__item--image' src='https://savvy-tots.s3.eu-west-3.amazonaws.com/block-images-home/002.jpeg' alt='card-blog' width='380' height='380'/></li>
        <li><img className='block__item-image' src='https://savvy-tots.s3.eu-west-3.amazonaws.com/block-images-home/003.jpeg' alt='card-blog' width='380' height='380'/></li>
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