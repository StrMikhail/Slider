import React from 'react';
import './style.css'
const Slides = ({ picture, openModal, currentPic }) => {
    return (
        <div 
            onClick={openModal}
            className='slide'
        >
            <img src={picture} alt="" />
        </div>
    );
};

export default Slides;