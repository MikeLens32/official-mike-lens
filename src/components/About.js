import React from "react";
import ".//CSS/About.css";
import image from "../_DSC6566.JPG"

function About() {
    return(
        <div className="About">
            <h1>
                The Need To Know
            </h1>
            <img className="Mike-Lens" src={image} alt="Mike Lens"/>
            <br/>
            <h5>
                With my deep love for fiction and movies you can say that I was bound to eventually pick a camera at some point. I made communications my major and absolutely loved the world media on almost every level and miniored in nonfiction film production. I picked up writing with my with the never ending revovling dooor of ideas.
            </h5>
            <h5 className="Second-h5">
                When getting to Concordia College in New York I had a lot of freedom to create my projects and picking up a camera changed my life forever. I got into photography and deeper into videography. I find myself writing pieces that speaks to people and wanted people to connect with my work in college. My writing style for my shorts share that same passion and I want to connect my pieces to programs to give solutions and not just list the issues.
            </h5>
            <br/>
        </div>
    )
}

export default About