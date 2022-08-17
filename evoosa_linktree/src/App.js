import React from 'react';
import InstagramDropdown from './components/InstagramDropdown';
import SoundCloud from './components/SoundCloud';
import Professional from './components/Professional';
import Art from "./components/Art";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import GlobalStyles from "./components/GlobalStyles";
import {ThemeProvider} from "styled-components";
import candy from "react95/dist/themes/candy";
import {Window, WindowContent, WindowHeader} from "react95";

import "./global.css"

function App() {
    return (
        <body
            style={{
                textAlign: "center",
                padding: "5%"
            }}>
        <div className="application">
            <GlobalStyles/>
            <ThemeProvider theme={candy}>
                <Window className='window'
                        style={{
                            width: "90%",
                            align: "center"
                        }}>
                    <WindowHeader active={true} className='window-header'>
                        <span>Art Links</span>
                    </WindowHeader>
                    <WindowContent>
                        <Box sx={{width: '100%'}}>
                            <Grid container spacing={{xs: 2, md: 5}} columns={{xs: 4, md: 16}}>
                                <Grid item xs={4}>
                                    <InstagramDropdown/>
                                </Grid>
                                <Grid item xs={4}>
                                    <Art/>
                                </Grid>
                                <Grid item xs={4}>
                                    <SoundCloud/>
                                </Grid>
                                <Grid item xs={4}>
                                    <Professional/>
                                </Grid>
                            </Grid>
                        </Box>
                    </WindowContent>
                </Window>
            </ThemeProvider>
        </div>
        </body>
    );
}

export default App;