import React, { useState } from 'react'
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa'
import SliderBotanicalData from "../SliderData/SliderBotanical"


function ImageSliderBotanical({ botanical }) {

    const [currentBo, setCurrentBo] = useState(0)
    const length = botanical.length

    const nextSlid = () => {
        setCurrentBo(currentBo === length  -1 ? 0 :
            currentBo + 1)
    }

    const prevSlid = () => {
        setCurrentBo(currentBo === 0 ? length - 1 : currentBo - 1)
    }
    
    if(!Array.isArray(botanical) || botanical.length <= 0) {
        return null
    }

    return (
        <section className="Botanical-garden">
            <FaArrowAltCircleLeft className='left-prev' onClick={prevSlid}/>
            {SliderBotanicalData.map((botGarden, index) => {
                return(
                    <div
                    className={index === currentBo ? "botanical-active" : "botanical"}
                    >
                        {index === currentBo && (<img src={botGarden.image} alt={botGarden.alt} className="Botanical-Image"/>
                        )}
                    </div>
                )
            })}
            <FaArrowAltCircleRight className='right-next' onClick={nextSlid}/>
        </section>
    )
}

export default ImageSliderBotanical;
