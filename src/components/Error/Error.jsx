import React from 'react';
import error from './error.svg';

const Error = () => {
    return (
        <div style={{textAlign: 'center'}}>
            <div><img style={{minWidth: '400px', padding: '50px'}} src={error} alt='Error 404'></img></div>
            <h3 style={{margin: '30px', color: '#1b2c56'}}>Sorry, page not found!</h3>
        </div>
    )
}

export default Error;
