import React from 'react';
import InstagramDropdown from './components/InstagramDropdown';
import SoundCloud from './components/SoundCloud';
import Professional from './components/Professional';
import Websites from "./components/Websites";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';


function App() {
    return (
        <div className="App"
             style={{
                 fontFamily: "Lucida Console, Monaco, monospace",
                 alignContent: "center"
             }}>
            <Box sx={{width: '100%'}}>
                <Grid container spacing={{xs: 2, md: 5}} columns={{xs: 4, md: 16}}>
                    <Grid item xs={4}>
                        <InstagramDropdown/>
                    </Grid>
                    <Grid item xs={4}>
                        <SoundCloud/>
                    </Grid>
                    <Grid item xs={4}>
                        <Websites/>
                    </Grid>
                    <Grid item xs={4}>
                        <Professional/>
                    </Grid>
                </Grid>
            </Box>
            {/*<InstagramDropdown/>*/}
            {/*<br/>*/}
            {/*<br/>*/}
            {/*<br/>*/}
            {/*<SoundCloud/>*/}
            {/*<br/>*/}
            {/*<br/>*/}
            {/*<br/>*/}
            {/*<Websites/>*/}
            {/*<br/>*/}
            {/*<br/>*/}
            {/*<br/>*/}
            {/*<Professional/>*/}
        </div>
    );
}

export default App;