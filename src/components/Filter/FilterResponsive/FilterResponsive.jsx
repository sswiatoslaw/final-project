import React from 'react'
import useWindowSize from '../../../сustomHooks/useWindowSize';
import MobileFilterWrapper from '../MobileFilterWrapper/MobileFilterWrapper';
import FilterWrapper from '../FilterWrapper/FilterWrapper';
const FilterResponsive = () => {
  const size = useWindowSize();
  if (size.width >= 769) {
    return <FilterWrapper onClick={() => {}} toogleClick={() => {}} />;
  } else {
    return <MobileFilterWrapper />;
  }
};
export default FilterResponsive