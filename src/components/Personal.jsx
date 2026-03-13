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
import peggyPastels from "react95/dist/themes/peggysPastels";

const Personal = () => (
    <div>
        <GlobalStyles/>
        <ThemeProvider theme={peggyPastels}>
            <Window className='window'>
                <WindowHeader active={false} className='window-header'>
                    <span>Personal</span>
                </WindowHeader>
                <WindowContent>
                    <List className={'window-list'}>
                        <ListItem as={Link}
                                  className={'list-item-style-override workshops-nav-item'}
                                  to='/workshops'>
                            <span style={{fontWeight: '900', textShadow: '0.2px 0 currentColor, -0.2px 0 currentColor'}}>🎨 workshops ↗</span>
                        </ListItem>
                        <Divider/>
                        <ListItem as={Link}
                                  className={'list-item-style-override social-nav-item'}
                                  to='/social'>
                            📱 social media ↗
                        </ListItem>
                        <Divider/>
                        <ListItem as={Link}
                                  className={'list-item-style-override maps-nav-item'}
                                  to='/maps'>
                            🗺️ Maps ↗
                        </ListItem>
                    </List>
                </WindowContent>
            </Window>
        </ThemeProvider>
    </div>
);
export default Personal;