import React from 'react';
import { Button as ButtonComponent } from 'antd';
import './Button.scss';

const Button = ({
  modifier,
  onClick,
  text,
  htmlType,
  width = '100%',
  minWidth = '280px',
  height = '60px',
  minHeight,
  maxHeight,
  textTransform = 'uppercase',
  borderRadius
}) => {
  return (
    <ButtonComponent
      onClick={onClick}
      className={`btn btn--${modifier} btn__text  btn__text--${modifier}`}
      htmlType={htmlType}
      style={{ width, minWidth, height, minHeight, maxHeight, textTransform, borderRadius }}>
      {text}
    </ButtonComponent>
  );
};

export default Button;
