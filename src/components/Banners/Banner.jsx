<<<<<<< HEAD
import React from 'react';
import PropTypes from 'prop-types';
import './Banner.scss';

const Banner = ({
  imgPath,
  imgName,
  opacity = '0.2',
  minHeight = '180px',
  maxHeight = '400px',
  textTop,
  title,
  textBottom,
  children
}) => {
  return (
    <section className='banner'>
      <div className='banner__container-img'>
        <img className='banner__img' src={imgPath} alt={imgName} style={{ minHeight, maxHeight }} />
      </div>

      <span className='banner__overlay' style={{ opacity, backgroundColor: '#36403D' }}></span>

      <div className='banner__content'>
        {textTop && <p className='banner__text banner__text--top'>{textTop}</p>}
        <h2 className='banner__title'>{title}</h2>
        {textBottom && <p className='banner__text banner__text--bottom'>{textBottom}</p>}
        {children && <div className='banner__btn'>{children}</div>}
      </div>
    </section>
  );
};

export default Banner;

Banner.propTypes = {
  imgPath: PropTypes.string,
  imgName: PropTypes.string,
  opacity: PropTypes.string,
  minHeight: PropTypes.string,
  maxHeight: PropTypes.string,
  textTop: PropTypes.string,
  title: PropTypes.string,
  textBottom: PropTypes.string,
  children: PropTypes.element,
};
||||||| 01e9988
=======
import React from 'react';
import PropTypes from 'prop-types';
import './Banner.scss';

const Banner = ({
  imgPath,
  imgName,
  opacity = '0.2',
  minHeight = '180px',
  maxHeight = '400px',
  textTop,
  title,
  textBottom,
  children
}) => {
  return (
    <section className='banner'>
      <div className='banner__container-img'>
        <img className='banner__img' src={imgPath} alt={imgName} style={{ minHeight, maxHeight }} />
      </div>

      <span className='banner__overlay' style={{ opacity, backgroundColor: '#36403D' }}></span>

      <div className='banner__content'>
        {textTop && <p className='banner__text banner__text--top'>{textTop}</p>}
        <h2 className='banner__title'>{title}</h2>
        {textBottom && <p className='banner__text banner__text--bottom'>{textBottom}</p>}
        {children && <div className='banner__btn'>{children}</div>}
      </div>
    </section>
  );
};

export default Banner;

Banner.propTypes = {
  imgPath: PropTypes.string,
  imgName: PropTypes.string,
  opacity: PropTypes.string,
  minHeight: PropTypes.string,
  maxHeight: PropTypes.string,
  textTop: PropTypes.string,
  title: PropTypes.string,
  textBottom: PropTypes.string,
  children: PropTypes.element,
};
>>>>>>> 093e7e2629187c565eaacba5c5df474aa40bd5ca
