import React, { useState } from 'react';
import SliderIndoorData from '../SliderData/SliderIndoorData'

function ImageSliderIndoor({ indoor }) {

    const [currentIn, setCurrentIn] = useState(0)
    const length = indoor.length

    const nextSlide = () => {
        setCurrentIn(currentIn === length - 1 ? 0 : currentIn + 1)
    }

    if(!Array.isArray(indoor) || indoor.length <= 0) {
        return null
    }

    return (
        <section className="Indoor-Section">
            <h3 className="Section-Heading">Indoor</h3>
            {SliderIndoorData.map((indoor , index) => {
                return(
                    <div
                    className={index === currentIn ? "indoor-active" : "indoors"}
                    key={index}>
                        {index === currentIn && (<img src={indoor.image} alt={indoor.alt } 
                        onClick={nextSlide}
                        className="Indoor-Image"/>
                        )}
                    </div>
                )
            })}
        </section>
    )
}

export default ImageSliderIndoor;
