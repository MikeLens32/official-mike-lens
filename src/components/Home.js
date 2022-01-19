import React from "react";
import "./Home.css";
import './HomeCommentary.css';
import PhotoCategories from './PhotoCategories';
import HomeContainer from './HomeContainer';


function Home() {

    return(
        <div className="Home-Container">
            <h1>
                Mike Lens
            </h1>
            <p className="Welcome">
                Welcome to my porfolio page and take a look at some of my sample work. There's four categories and I always love feedback towards my craft! Feel free to click through the pictures, enter your name, vote for category, and leave as long of a comment as you please! In addition, to my home page take your time going through the other pages.
            </p>
            <PhotoCategories />
            <HomeContainer />
        </div>
    )
}

export default Home