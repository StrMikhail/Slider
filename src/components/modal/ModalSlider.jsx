import React from 'react';
import Pagination from '../pagination/Pagination';
import './style.css'

const ModalSlider = ({picture, active, setActive, slidesArray, currentPic, setCurrentPic}) => {
    return (
        <div className={active ? "modal active" : "modal"}
            onClick={() => setActive(false)}
            >
            <div className="modal__content"
                onClick={e => e.stopPropagation()}
            >
                <img src={picture} alt="" />
                <Pagination 
                    currentPic={currentPic}
                    setCurrentPic={setCurrentPic}
                    slidesArray={slidesArray}
                />
            </div>
        </div>
    );
};

export default ModalSlider;