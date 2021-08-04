import React from 'react'
import { Anchor } from 'antd';
import Logo from './Logo';
import TextLogo from '../Logo/TextLogo';

const { Link } = Anchor;

const Logotip = (props) => {
  return (
        <Anchor onClick={props.onClick} >
            <Link>
                <Logo width={'180px'} heigth={'165px'} />
                <TextLogo />
            </Link>
        </Anchor>
  )
}

export default Logotip
