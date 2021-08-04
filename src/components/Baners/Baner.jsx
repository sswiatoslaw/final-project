import React from 'react';
import PropTypes from 'prop-types';
import './Baner.scss';

const Baner = ({
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
    <section className='baner'>
      <div className='baner__container-img'>
        <img className='baner__img' src={imgPath} alt={imgName} style={{ minHeight, maxHeight }} />
      </div>

      <span className='baner__overlay' style={{ opacity, backgroundColor: '#36403D' }}></span>

      <div className='baner__content'>
        {textTop && <p className='baner__text baner__text--top'>{textTop}</p>}
        <h2 className='baner__title'>{title}</h2>
        {textBottom && <p className='baner__text baner__text--bottom'>{textBottom}</p>}
        {children && <div className='baner__btn'>{children}</div>}
      </div>
    </section>
  );
};

export default Baner;

Baner.propTypes = {
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
