import React, { useState } from 'react';
import './style.scss';

const InputText = (props) => {    

    return (
        <input type="text" className='custom-input-text' placeholder={props.placeholder}
            onChange={(e) => { props.onChangeInput(e.target.value) }} />        
    )
}

export default InputText;