import React from 'react'

const SavvyStyle = {
  fontSize: 50,
  color: '#5E6A67',
  fontFamily: 'Montserrat'
}

const TotsStyle = {
  fontSize: 30,
  color: '#A8D6CB'
}

const TextLogo = (props) => {
  return (
        <span className={props.className} style={SavvyStyle}>
            Savvy
            < span style={TotsStyle} >
                T o t s
            </span >
        </span >
  )
}

export default TextLogo