import React from 'react';
import './style.scss';


const TextBtn = (props) => {
    const isColor = props.textColor;
    let style;
    if (isColor == "default") style = "text-button color-default";
    else if (isColor == "primary") style = "text-button color-primary";
    return (

        <a href="#" className={style}>{props.name}</a>
    )
}

export default TextBtn;