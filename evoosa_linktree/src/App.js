import React from 'react';
import Social from './components/Social';
import Music from './components/Music';
import OProfessional from './components/Professional';
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
                <Window className={'app-window'}
                    >
                    <WindowHeader active={true}>
                        <span>evoosa's linktree</span>
                    </WindowHeader>
                    <WindowContent>
                        <Box sx={{width: '100%'}}>
                            <Grid container spacing={{xs: 2, md: 5}} columns={{xs: 4, md: 16}}>
                                <Grid item xs={4}>
                                    <Social/>
                                </Grid>
                                <Grid item xs={4}>
                                    <Art/>
                                </Grid>
                                <Grid item xs={4}>
                                    <Music/>
                                </Grid>
                                <Grid item xs={4}>
                                    <OProfessional/>
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