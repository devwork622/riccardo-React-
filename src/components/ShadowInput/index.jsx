import React from 'react';
import './style.scss';
import SearchIcon from '@mui/icons-material/Search';

const ShadowInput = () => {
    return (
        <>
            <div className='input-icons'>
                <SearchIcon />
                <input type="text" className='shadow-input' placeholder='Cerca' />
            </div>
        </>
    )
}

export default ShadowInput;