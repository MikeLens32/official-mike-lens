import React, { useState } from 'react'
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa'
import SliderIndoorData from '../SliderData/SliderIndoorData'

function ImageSliderIndoor({ indoor }) {

    const [currentIn, setCurrentIn] = useState(0)
    const length = indoor.length

    const nextSlide = () => {
        setCurrentIn(currentIn === length - 1 ? 0 : currentIn + 1)
    }

    const prevSlide = () => {
        setCurrentIn(currentIn === 0 ? length - 1 : currentIn - 1)
    }

    if(!Array.isArray(indoor) || indoor.length <= 0) {
        return null
    }

    return (
        <section className="Indoor-Section">
            <FaArrowAltCircleLeft className='left-prev' onClick={prevSlide}/>
            {SliderIndoorData.map((indoor , index) => {
                return(
                    <div
                    className={index === currentIn ? "indoor-active" : "indoors"}>
                        {index === currentIn && (<img src={indoor.image} alt={indoor.alt} className="Indoor-Image"/>
                        )}
                    </div>
                )
            })}
            <FaArrowAltCircleRight className='right-next' onClick={nextSlide}/>
        </section>
    )
}

export default ImageSliderIndoor;
