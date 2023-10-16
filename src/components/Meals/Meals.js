import React,{Fragment} from "react";

import Banner from "./Banner";

import MealsList from './MealsList';

const Meals=props=>{
    return(
        <Fragment>
            <Banner/>
            <MealsList/>
        </Fragment>
    );
}

export default Meals;