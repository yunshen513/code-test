import React, { useState } from "react";
import { Icon } from '@iconify/react';
import './Sidebar.css';
import ToggleBar from "./ToggleBar";

const Sidebar = () => {
    const [openToggle, setOpenToggle] = useState(false);

    return(
        <div className="layout_sidebar" >
            <ToggleBar open={openToggle}/>
            <img src="/arrowIcon.svg" onClick={()=>setOpenToggle(true)}></img>
            <div className="icons_main">
                <li><Icon className="sidebar_icon" icon="carbon-search" /></li>
                <li><Icon className="sidebar_icon" icon="bx:home-alt-2" /></li>
                <li><Icon className="sidebar_icon" icon="ph:trend-up-light" /></li>
                <li><Icon className="sidebar_icon" icon="bx:camera-movie" /></li>
                <li><Icon className="sidebar_icon" icon="mdi:movie-open-outline" /></li>
            </div>
            <div className="icons_bottom">
                <li><Icon className="sidebar_icon" icon="iconoir:profile-circle" /></li>
                <li><Icon className="sidebar_icon" icon="uiw:setting-o" /></li>
            </div>
        </div>);
};

export default Sidebar;