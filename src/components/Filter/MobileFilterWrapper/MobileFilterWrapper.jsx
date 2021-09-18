import React, {useState, useEffect} from 'react'

import './MobileFilterWrapper.scss'
import Button from '../../Button/Button'
import FilterWrapper from '../FilterWrapper/FilterWrapper'
const MobileFilterWrapper = () => {
  const [filterFlag, setfilterFlag] = useState(false)
  useEffect(() => {
    setfilterFlag(filterFlag)
  }, [filterFlag])

  const toggleModalFilters = () => {
    setfilterFlag(!filterFlag)
  }
  return (
      <>
       
       {(filterFlag
         ? <div className={'filter-aside'}>
             <div className={'filter-aside_block'}>
                 <span className={'filter-aside_block--close'}>
                     <Button text='x' modifier='close' width='20px' minWidth='20px' height='20px' onClick={toggleModalFilters}/>
                     </span>
             <FilterWrapper onClick={toggleModalFilters} toogleClick={toggleModalFilters} />
             </div>
             
       </div>
         : <div className={'filter-aside_btn'}>
         <Button text='Filters' borderRadius='8px' height='32px' minWidth='172px' width='50%' modifier='filter' onClick={toggleModalFilters}/>
         </div>
       )}
       </>
  )
}

export default MobileFilterWrapper
