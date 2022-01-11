import React, { useState } from 'react'
import { SliderCentralData } from '../SliderData/SliderCentral'
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa'

function ImageSliderCentral({ central }) {

    const [currentCen, setCurrentCen] = useState(0)
    const length = central.length

    const nextSlide = () => {
        setCurrentCen(currentCen === length - 1 ? 0 : currentCen + 1)
    }

    const prevSlide = () => {
        setCurrentCen(currentCen === 0 ? length - 1 : currentCen - 1)
    }

    if(!Array.isArray(central) || central.length <= 0) {
        return null
    }

    return (
        <section className="Central-Section">
            <FaArrowAltCircleLeft className='left-prev' onClick={prevSlide}/>
            {SliderCentralData.map((center, index) => {
                return(
                    <div 
                    className={index === currentCen ? "central-active" : "central"}
                    >
                        {index === currentCen && (<img src={center.image} alt={center.alt} className="Central-Image"/>
                        )}
                    </div>
                )
            })}
            <FaArrowAltCircleRight className='right-next' onClick={nextSlide}/>
        </section>
    )
}

export default ImageSliderCentral
