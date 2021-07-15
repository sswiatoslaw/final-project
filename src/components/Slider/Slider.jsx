import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import blyat from './saw.png';
import blyat1 from './pos.png';
import blyat2 from './joe.png';
import './Slider.scss';

const Gallery = ({ Carousel }) => {
  const navItems = [
    {
      pic: blyat,
    },
    {
      pic: blyat1,
    },
    {
      pic: blyat2,
    },
  ];
  const items = navItems.map((items, i) => <img style={{maxWidth: '500px', height: '698px', margin: '119px 0 0 130px'}} src={items.pic} key={i} alt={items.pic} />)

  const thumbItem = navItems.map((item, i) => (
    <img
      style={{ width: '140px', height: '218px', marginBottom: '20px'}}
      src={item.pic}
      key={i}
      onClick={() => Carousel.slideTo(i)}
    />
  ));

  return (
    <div>
      <AliceCarousel animationType='fadeout' disableButtonsControls='true' disableDotsControls='true' controlsStrategy='responsive' items={items} ref={(el) => (Carousel = el)} />

      <nav className='navGallery'>{thumbItem}</nav>
    </div>
  );
};

export default Gallery;
