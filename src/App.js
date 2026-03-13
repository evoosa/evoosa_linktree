import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Personal from './components/Personal';
import Music from './components/Music';
import OProfessional from './components/Professional';
import Art from "./components/Art";
import Projects from "./components/Projects";
import Maps from "./components/Maps";
import MyMusic from "./components/MyMusic";
import MyBlogs from "./components/MyBlogs";
import Workshops from "./components/Workshops";
import DJSets from "./components/DJSets";
import Social from "./components/Social";
import Portfolio from "./components/Portfolio";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import GlobalStyles from "./components/GlobalStyles";
import {ThemeProvider} from "styled-components";
import candy from "react95/dist/themes/candy";
import {Window, WindowContent, WindowHeader} from "react95";

import "./global.css"

function Home() {
    return (
        <body style={{ textAlign: "center", padding: "5%" }}>
            <div className="application">
                <GlobalStyles/>
                <ThemeProvider theme={candy}>
                    <Window className={'app-window'}>
                        <WindowHeader active={true}>
                            <span>evoosa's linktree</span>
                        </WindowHeader>
                        <WindowContent>
                            <Box sx={{width: '100%'}}>
                                <Grid container spacing={{xs: 2, md: 5}} columns={{xs: 4, md: 16}}>
                                    <Grid item xs={4}>
                                        <Art/>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <Music/>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <Personal/>
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

function App() {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/maps" element={<Maps />} />
                <Route path="/my-music" element={<MyMusic />} />
                <Route path="/my-blogs" element={<MyBlogs />} />
                <Route path="/workshops" element={<Workshops />} />
                <Route path="/dj-sets" element={<DJSets />} />
                <Route path="/social" element={<Social />} />
                <Route path="/portfolio" element={<Portfolio />} />
            </Routes>
        </HashRouter>
    );
}

export default App;