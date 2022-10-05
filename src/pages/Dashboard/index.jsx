import * as React from 'react';
import "./style.scss";
import Grid from '@mui/material/Unstable_Grid2';
import icon1 from "../../assets/images/icon-layer.png";
import icon2 from "../../assets/images/icon-dollar.png";
import icon3 from "../../assets/images/icon-group.png";
import icon4 from "../../assets/images/icon-tag.png";
import { NavLink } from "react-router-dom";

const Dashboard = () => {
    return (
        <div className="content">
            <p className="heading-chat">Impostazioni chat</p>
            <div className='card-section'>
                <Grid container spacing={5}>
                    <Grid xs={6} md={6}>
                        <div className='card'>
                            <NavLink className="navbar-item" to="/">
                                <div className='icon-section'>
                                    <img src={icon1} />
                                </div>
                                <div>
                                    <p className='card-label'>Checklist & Verbali</p>
                                </div>
                            </NavLink>
                        </div>
                    </Grid>
                    <Grid xs={6} md={6}>
                        <div className='card'>
                            <NavLink className="navbar-item" to="/">
                                <div className='icon-section'>
                                    <img src={icon2} />
                                </div>
                                <div>
                                    <p className='card-label'>Contabilità</p>
                                </div>
                            </NavLink>
                        </div>
                    </Grid>
                    <Grid xs={6} md={6}>
                        <div className='card'>
                            <NavLink className="navbar-item" to="/">
                                <div className='icon-section'>
                                    <img src={icon3} />
                                </div>
                                <div>
                                    <p className='card-label'>Squadre</p>
                                </div>
                            </NavLink>
                        </div>
                    </Grid>
                    <Grid xs={6} md={6}>
                        <div className='card'>
                            <NavLink className="navbar-item" to="/">
                                <div className='icon-section'>
                                    <img src={icon4} />
                                </div>
                                <div>
                                    <p className='card-label'>Tag</p>
                                </div>
                            </NavLink>
                        </div>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default Dashboard;