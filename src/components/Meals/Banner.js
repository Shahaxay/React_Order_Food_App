import React from "react";
import './Banner.css';
import Card from "../UI/Card";

const Banner = () => {
    const title = 'Delicious Food, Delivered To You';
    const slogan1 = 'Choose your favourite meal from our broad selection of available meals and enjoy a delicious lunch or deliver at home.';
    const slogan2 = 'All our meals are cooked with high quality ingredients, just in time and of course by experienced chefs!'
    return (
        <Card usedIn='banner'>
            <h2 className="banner_title">{title}</h2>
            <p className="banner_slogan">{slogan1}</p>
            <p className="banner_slogan">{slogan2}</p>
        </Card>
    );
}

export default Banner;