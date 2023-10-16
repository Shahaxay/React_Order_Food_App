import React from "react";
import './Banner.css';
import Card from "../UI/Card";

const Banner=props=>{
    return (
        <Card usedIn='banner'>
            <h2 className="banner_title">{props.title}</h2>
            <p className="banner_slogan">{props.slogan1}</p>
            <p className="banner_slogan">{props.slogan2}</p>
        </Card>
    );
}

export default Banner;