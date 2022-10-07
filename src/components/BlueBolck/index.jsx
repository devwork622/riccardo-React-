import React from 'react';
import './style.scss';

const BlueBlock = (props) => {
    return (
        <div className='blue-block d-flex justify-content-center align-items-center my-1'>
            <p>{props.name}</p>
        </div>
    )
}

export default BlueBlock;