import * as React from 'react';
import "./style.scss";
import ShadowInput from '../../components/ShadowInput';
import Box from '@mui/material/Box';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { Link } from 'react-router-dom';
import { color } from '@mui/system';
import bigTagImg from "../../assets/images/icon-tag 1.png";

const Tag = () => {
    return (
        <div className='tag-section'>
            <p className='text-breadcrumb'>Tag</p>
            <div className='tag-section-items'>
                <ShadowInput />
                <Link>
                    <AddCircleIcon sx={{ fontSize: "70px", color: "#83112F" }} />
                </Link>
            </div>
            <div className='tag-card-section'>
                <div className='d-flex justify-content-center'>
                    <img src={bigTagImg} />
                </div>
                <div className='d-flex justify-content-center pt-3'>
                    <p className='tag-card-text'>Non hai aggiunto ancora alcun tag</p>
                </div>
            </div>
        </div>
    );
}

export default Tag;