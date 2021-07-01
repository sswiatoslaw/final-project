import React, { useState, useEffect } from 'react';
import 'antd/dist/antd.css';
import './GuideToFavoriteLooks.scss';
import GuideToFavoriteLooksDesc from './GuideToFavoriteLooksDesc';
import GuideToFavoriteLooksMob from './GuideToFavoriteLooksMob';

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });
  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return windowSize;
}

const GuideToFavoriteLooks = () => {
  const size = useWindowSize();
  console.log(size);

  if (size.width >= 769) {
    return <GuideToFavoriteLooksDesc />
  } else {
    return <GuideToFavoriteLooksMob />
  }
};

export default GuideToFavoriteLooks;