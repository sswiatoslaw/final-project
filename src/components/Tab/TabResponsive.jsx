import React from 'react'
import useWindowSize from '../../сustomHooks';
import MobileTabProductImg from './MobileTabProductImg';
import DesktopTabProductImg from './DesktopTabProductImg';
import './TabProductImg.scss'
const TabResponsive = () => {
  const size = useWindowSize();
  
  if (size.width >= 769) {
    return <DesktopTabProductImg />;
  } else {
    return <MobileTabProductImg />;
  }
};
export default TabResponsive