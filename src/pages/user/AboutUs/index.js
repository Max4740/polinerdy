import {memo, useState} from "react";
//import "./style.scss";
import {Link} from "react-router-dom";
import { ROUTERS } from "utils/router";
import "./style.scss"

const AboutUs = () => {
    return (
    <>
    <div className="About_us">
        <div className="About_us_header">
            <div className="About_us__line"></div>
            <div className="About_us__header_text">
                Về Polinerdy Assembly
            </div>
            <div className="About_us__line"></div>
        </div> 
        <div className="About_us__video">
            <div className="video">
                <iframe 
                //class="absolute top-0 left-0 w-full h-full"
                width = "560"
                height= "315"
                src="https://www.youtube.com/embed/7jYLMQGAKxs?si=KnBznMdDgQtyKUrH"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen></iframe>
            </div>
        </div>
    </div>
    </>
    );
};
 
export default memo(AboutUs);