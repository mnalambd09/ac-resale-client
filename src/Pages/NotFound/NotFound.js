import React from 'react';
import Image  from './404.jpg';
import './NotFound.css'

const NotFound = () => {
    return (
        <div className='image'>
            <img className='w-full' src={Image} alt="" />
        </div>
    );
};

export default NotFound;