import React from 'react';
import './Button.scss';
import { Button as ButtonComponent } from 'antd';

const Button = (props) => {
  const { children, type, onClick } = props;
  let button;
  if (type === 'border') {
    button = <ButtonComponent onClick={onClick} className={`ant-btn-${type}`}> {children} </ButtonComponent>;
  } else {
    button = <ButtonComponent onClick={onClick} className='ant-btn-default'> {children} </ButtonComponent>;
  }
  return (
    <>
      {button}
    </>
  );
};

export default Button;
