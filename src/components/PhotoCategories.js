import ImageSliderBotanical from "./ImageSlider/ImageSliderBotanical";
import ImageSliderIndoor from "./ImageSlider/ImageSliderIndoor";
import ImageSliderOutDoor from "./ImageSlider/ImageSliderOutDoor";
import {SliderOutDoorData as outdoor} from './SliderData/SliderOutDoorData';
import SliderIndoorData from './SliderData/SliderIndoorData';
import SliderBotanicalData from "./SliderData/SliderBotanical";
import ImageSliderCentral from "./ImageSlider/ImageSliderCentral";
import { SliderCentralData } from "./SliderData/SliderCentral";

function PhotoCategories() {
    return(
        <div>
            <h1>PhotoCategories</h1>
            <ImageSliderOutDoor outdoor={outdoor}/>
            {/* Passed in outdoor as a prop for a variable to use length function for the array number of images */}
            <ImageSliderIndoor indoor={SliderIndoorData}/>
            <ImageSliderBotanical botanical={SliderBotanicalData}/>
            <ImageSliderCentral central={SliderCentralData}/>
        </div>
    )
}

export default PhotoCategories;