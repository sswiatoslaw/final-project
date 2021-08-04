import React from 'react';
import GuideToFavoriteLooksDesc from './GuideToFavoriteLooksDesc';
import GuideToFavoriteLooksMob from './GuideToFavoriteLooksMob';
import useWindowSize from '../../сustomHooks';
import 'antd/dist/antd.css';
import './GuideToFavoriteLooks.scss';

const GuideToFavoriteLooks = () => {
  const size = useWindowSize();

  if (size.width >= 769) {
    return <GuideToFavoriteLooksDesc />;
  } else {
    return <GuideToFavoriteLooksMob />;
  }
};

export default GuideToFavoriteLooks;
