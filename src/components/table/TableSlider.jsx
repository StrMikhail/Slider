import React, { useState } from 'react';
import ModalSlider from '../modal/ModalSlider';
import Slides from '../slides/Slides';
import "./style.css"
const TableSlider = () => {

    const [modalActive, setModalActive] = useState(false)
    const [currentPic, setCurrentPic] = useState(0)

    const handleOpenModal = () => {
        setModalActive(true)
        console.log('Открываем окно')
    }

    const slidesArray = [
        { url: 
            "https://w-dog.ru/wallpapers/1/21/494513120428084/oblaka-gory-derevya-reka-doroga.jpg"
        },
        { url: 
            "https://avatars.mds.yandex.net/get-zen_doc/50840/pub_5cf0136e0b209822e4d84c14_5cf014877cb8e223b0284aba/scale_1200"
        },
        { url: 
            "https://million-wallpapers.ru/wallpapers/7/0/535923367045443/derevyannyj-dom-ruchej-voda.jpg"
        },
        { url: 
            "https://s1.1zoom.ru/big0/819/321881-svetik.jpg"
        },
        { url: 
            "https://avatars.mds.yandex.net/get-zen_doc/1641332/pub_5d8ed06f1febd400b0562bf9_5d8ed08fdf944400ad95eaec/scale_1200"
        },
        { url: 
            "https://proza.ru/pics/2020/08/18/240.jpg"
        },
        { url: 
            "http://andrologmed.ru/wp-content/uploads/4/9/c/49ca38809a41e1d5aeaa4de77cf705eb.jpg"
        },
        { url: 
            "https://demotivation.ru/wp-content/uploads/2020/09/myasnye-produkty-shashlyk-eda-scaled.jpg"
        },
        { url: 
            "https://proza.ru/pics/2020/08/20/638.jpg"
        },

    ];
    
    const picture = `${slidesArray[currentPic].url}`
    
  
    return (
        <div className='container'>
            <h1>Slider</h1>
            <Slides
                picture={picture}
                openModal={handleOpenModal}
                slides={slidesArray}
            />
            <ModalSlider 
                currentPic={currentPic}
                setCurrentPic={setCurrentPic}
                slidesArray={slidesArray}
                picture={picture}
                active={modalActive}
                setActive={setModalActive}
            />
        </div>
    );
};

export default TableSlider;