import React from 'react';
import {ThemeProvider} from 'styled-components';
import GlobalStyles from './GlobalStyles';

// Theme
import honey from "react95/dist/themes/honey";
import "../global.css"

const MusicalTwitter = () => (
    <div>
        <GlobalStyles/>
        <ThemeProvider
            theme={honey}>
            <button
                onClick={() => {
                    window.location.href = 'https://twitter.com/evoosic';
                }}
                className={"twitter-button"}>
                <img
                    className={"twitter-logo"}
                    src="https://evoosa-art.s3.eu-central-1.amazonaws.com/static/images/twitter.webp"
                    alt={"twitter_logo"}
                />
                <br/>
                <br/>
                <div className={"twitter-text"}>
                    ♪ Music Reviews ♪
                </div>
            </button>
        </ThemeProvider>
    </div>
);
export default MusicalTwitter;