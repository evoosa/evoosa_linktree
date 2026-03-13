import React from 'react';
import {ThemeProvider} from 'styled-components';
import {Link} from 'react-router-dom';
import {
    List,
    ListItem,
    Divider,
    Window,
    WindowContent,
    WindowHeader
} from 'react95';

import GlobalStyles from './GlobalStyles';

// Theme
import maple from "react95/dist/themes/maple";

const Music = () => (
    <div>
        <GlobalStyles/>
        <ThemeProvider theme={maple}>
            <Window className='window'>
                <WindowHeader active={true} className='window-header'>
                    <span>Music</span>
                </WindowHeader>
                <WindowContent>
                    <List className={'window-list'}>
                        <ListItem as={Link}
                                  className={'list-item-style-override preserve-case dj-sets-nav-item'}
                                  to='/dj-sets'>
                            <span style={{fontWeight: '900', textShadow: '0.2px 0 currentColor, -0.2px 0 currentColor'}}>🎧 DJ sets ↗</span>
                        </ListItem>
                        <Divider/>
                        <ListItem as={Link}
                                  className={'list-item-style-override my-music-nav-item'}
                                  to='/my-music'>
                            🎵 my music ↗
                        </ListItem>
                    </List>
                </WindowContent>
            </Window>
        </ThemeProvider>
    </div>
);
export default Music;