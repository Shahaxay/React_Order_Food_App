import React from "react";

import './Card.css';

const Card=props=>{
    return <div className={`card ${props.usedIn==='banner'?'banner':''}`}>{props.children}</div>
}

export default Card