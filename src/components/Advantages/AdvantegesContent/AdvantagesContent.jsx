import React from 'react'
import {Col} from 'antd';
const AdvantagesContent = (props) => {
  const {svg, text, title} = props
  return (
   <Col className={'advantages-content'}>
       {svg}
     <h5 className={'advantages-content-title'}>
       {title}
     </h5>
     <p className={'content_text'}>
        {text}
     </p>
   </Col>
  )
}

export default AdvantagesContent