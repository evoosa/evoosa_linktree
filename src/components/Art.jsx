import React from 'react';
import {ThemeProvider} from 'styled-components';
import {Link} from 'react-router-dom';

import {Divider, List, ListItem, Window, WindowContent, WindowHeader} from 'react95';

import GlobalStyles from './GlobalStyles';

// Theme
import aiee from "react95/dist/themes/aiee";

const Art = () => (
    <div>
        <GlobalStyles/>
        <ThemeProvider theme={aiee}>
            <Window className='window'>
                <WindowHeader active={false} className='window-header'>
                    <span>Art</span>
                </WindowHeader>
                <WindowContent>
                    <List className={'window-list'}>
                        <ListItem as={Link}
                                  className={'list-item-style-override'}
                                  to='/portfolio'>
                            <span style={{fontWeight: '900', textShadow: '0.2px 0 currentColor, -0.2px 0 currentColor'}}>🎨 my art ↗</span>
                        </ListItem>
                        <Divider/>
                        <ListItem as={Link}
                                  className={'list-item-style-override projects-nav-item'}
                                  to='/projects'>
                            🗂️ cool projects ↗
                        </ListItem>
                    </List>
                </WindowContent>
            </Window>
        </ThemeProvider>
    </div>
);

export default Art;