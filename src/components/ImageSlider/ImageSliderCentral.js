import React, { useState } from 'react'
import { SliderCentralData } from '../SliderData/SliderCentral'

function ImageSliderCentral({ central }) {

    const [currentCen, setCurrentCen] = useState(0)
    const length = central.length

    const nextSlide = () => {
        setCurrentCen(currentCen === length - 1 ? 0 : currentCen + 1)
    }

    if(!Array.isArray(central) || central.length <= 0) {
        return null
    }

    return (
        <section className="Central-Section">
            <h3 className="Section-Heading">Central</h3>
            {SliderCentralData.map((center, index) => {
                return(
                    <div 
                    className={index === currentCen ? "central-active" : "central"}
                    >
                        {index === currentCen && (<img src={center.image} alt={center.alt} className="Central-Image"
                        onClick={nextSlide}/>
                        )}
                    </div>
                )
            })}
        </section>
    )
}

export default ImageSliderCentral
