import React from "react";
import { Icon } from '@iconify/react';
import './ToggleBar.css'

const ToggleBar = ({open}) => (
        <div className={open?"layout_togglebar togglebar_open":"layout_togglebar"}>
            <div className="play"><img src="/arrowIcon.svg" alt=""></img>Play</div>
            <div className="icons_main">
                <li><Icon className="togglebar_icons" icon="carbon-search" />Search</li>
                <li><Icon className="togglebar_icons" icon="bx:home-alt-2" />Home</li>
                <li><Icon className="togglebar_icons" icon="ph:trend-up-light" />Trending</li>
                <li><Icon className="togglebar_icons" icon="bx:camera-movie" />Web Series</li>
                <li><Icon className="togglebar_icons" icon="mdi:movie-open-outline" />Movies</li>
            </div>
            <div className="icons_bottom">
                <li><Icon className="togglebar_icons" icon="iconoir:profile-circle" />User_XXX</li>
                <li><Icon className="togglebar_icons" icon="uiw:setting-o" />Settings</li>
            </div>
        </div>
);

export default ToggleBar;