import React from "react";
import "./style.scss";
import Badge from '@mui/material/Badge';
const Topbar = () => {
    return (        
        <div className="topbar-section">
            <div className="topbar-items">
                <p>STATO LAVORI IN CORSO</p>
                <div className="topbar-items-right-section">
                    <a href="#" className="user-name">MARIO ROSSI</a>
                    <Badge badgeContent={1} color="info">
                        <a href="#" className="topbar-logo"></a>
                    </Badge>
                </div>
            </div>
        </div>        
    )
}

export default Topbar;