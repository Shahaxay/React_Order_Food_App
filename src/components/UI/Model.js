import React from "react";
import ReactDom from 'react-dom';
import './Model.css';
import Card from "./Card";

const BackDrop = () => {
    return <div className="back-drop"></div>
}

const ModelOverlay = props => {
    return (
        <Card usedIn='cartModel'>
            {props.children}
        </Card>
    );
}

const Model = props => {
    return <React.Fragment>
        {ReactDom.createPortal(<BackDrop />, document.getElementById('overlays'))}
        {ReactDom.createPortal(<ModelOverlay>{props.children}</ModelOverlay>, document.getElementById('overlays'))}
    </React.Fragment>;
};

export default Model;