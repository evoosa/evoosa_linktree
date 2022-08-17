import React from 'react';
import {ThemeProvider} from 'styled-components';
import {Tooltip, Button} from 'react95';
import GlobalStyles from './GlobalStyles';

// Theme
import honey from "react95/dist/themes/honey";

const SoundCloud = () => (
    <div>
        <GlobalStyles/>
        <ThemeProvider
            theme={honey}>
            <Tooltip
                text='i do (experi)mental music 😝' enterDelay={50} leaveDelay={50}>
                <Button as='a'
                        href='https://soundcloud.com/evoosa/tracks'
                        style={{
                            background: "linear-gradient(150deg, #ffba6a, #f26f00)",
                            height: "80px",
                            width: "250px",
                            fontWeight: "bold",
                            fontSize: "20px",
                            letterSpacing: "0.7px"
                        }}
                >🎵 SoundCloud 🎵</Button>
            </Tooltip>
        </ThemeProvider>
    </div>
);
export default SoundCloud;