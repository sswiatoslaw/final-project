import React from 'react';
import Logotip from './../Logo/Logotip';
import './Loading.scss'

const Loading = () => {
  return (
    <>
      <div className='wrapper'>
        <div className='loading'>
          <Logotip/>
          <span className='loading__text'>Stay here, is loading...</span>
      </div>
      </div>
    </>
  );
}

export default Loading;
