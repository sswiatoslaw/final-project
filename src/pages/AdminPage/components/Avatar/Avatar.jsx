import React from 'react'
import { Avatar as AvatarMaterial } from '@material-ui/core';

const Avatar = (props) => {
  const { onClick } = props;
  return (
    <AvatarMaterial onClick={onClick} alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
  )
}

export default Avatar
