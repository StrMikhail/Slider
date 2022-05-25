import React from 'react';
import './style.css'
const Pagination = ({ slidesArray, currentPic, setCurrentPic }) => {
    const handleClick = ({target}) => {
        setCurrentPic(target.id)
    }
    console.log('Текущая картинка под номером', currentPic)
    return (
        <div className='buttons'>
        {slidesArray.map((slide, id)=> (
            <div key={id}>
                <button 
                    className={currentPic == id ? "button active" : "button"}
                    id = {id}
                    onClick={handleClick}
                ></button>
            </div>    
        ))}
        
        </div>   
    );
};

export default Pagination;