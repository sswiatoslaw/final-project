import React from 'react'
import { Anchor } from 'antd';
import Logo from './SvgLogo.jsx';
const { Link } = Anchor;
const Logotip = (props) => {
  return (
        <Anchor onClick={props.onClick} >
          <Link>
         <Logo width={'64px'} heigth={'56px'}/>
          </Link>
        </Anchor>
  )
}

export default Logotip
