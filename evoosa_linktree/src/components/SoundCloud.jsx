import React from 'react';
import {ThemeProvider} from 'styled-components';
import {Tooltip, Button} from 'react95';
import GlobalStyles from './GlobalStyles';

// Theme
import honey from "react95/dist/themes/honey";
import "./soundcloud.css"

const SoundCloud = () => (
    <div>
        <GlobalStyles/>
        <ThemeProvider
            theme={honey}>
            <button
               onClick={() => {
                    window.location.href = 'https://soundcloud.com/evoosa/tracks';
                }}
                className={"soundcloud-button"}>
                <img className={"soundcloud-logo"}
                     src="https://evoosa-art.s3.eu-central-1.amazonaws.com/static/images/soundcloud.webp"
                />
                <br/>
                <br/>
                <div className={"soundcloud-text"}>
                    ♪ My Music ♪
                </div>
            </button>
        </ThemeProvider>
    </div>
);
export default SoundCloud;