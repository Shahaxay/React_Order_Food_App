import React from "react";

import './Input.css';

const Input = props => {
    return (
        <div className="input">
            <label htmlFor={props.input.id}>Amount</label>
            <input {...props.input} className={`${props.usedIn==='mealForm'?'mealForm':''}`}/>
        </div>
    );
}

export default Input;