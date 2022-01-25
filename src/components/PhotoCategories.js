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
            <ImageSliderOutDoor outdoor={outdoor}/>
            <ImageSliderIndoor indoor={SliderIndoorData}/>
            <ImageSliderBotanical botanical={SliderBotanicalData}/>
            <ImageSliderCentral central={SliderCentralData}/>
        </div>
    )
}

export default PhotoCategories;