import React from 'react';
import './style.scss';
import { useSelector } from "react-redux";

const CustomButton = (props) => {

    const storeValue = useSelector((store) => store);
    const isColor = props.bgColor;
    const isActive = props.active;
    let style;
    if (isActive == "true") {
        if (isColor == "primary") style = "btn primary-button color-white bg-color-primary";
        else if (isColor == "secondary") style = "btn secondary-button color-white bg-color-secondary";
        else if (isColor == "tertiary") style = "btn tertiary-button color-default bg-color-tertiary";
        return (
            <button className={style} onClick={props.onClickBtn} >{props.name}</button>
        )
    }
    else {
        if (isColor == "primary") style = "btn primary-button color-white bg-color-primary";
        else if (isColor == "secondary") style = "btn secondary-button color-white bg-color-secondary";
        else if (isColor == "tertiary") style = "btn tertiary-button color-default bg-color-tertiary";
        return (
            <button className={style} onClick={props.onClickBtn} disabled>{props.name}</button>
        )
    }

    
}

export default CustomButton;