import React, { Fragment } from 'react'
import { Anchor } from 'antd';
import Logo from './Logo';
import TextLogo from '../Logo/TextLogo';
import './Logotip.scss';

const { Link } = Anchor;

const Logotip = (props) => {
  return (
      <>
      <div className='logotip'>
        <Anchor onClick={props.onClick} >
            <Link>
                <Logo width={'180px'} heigth={'165px'} />
                <TextLogo />
            </Link>
        </Anchor>
      </div>
      </>
  )
}

export default Logotip