import React from 'react';
import {ThemeProvider} from 'styled-components';
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

const InstagramDropdown = () => (
    <div>
        <GlobalStyles/>
        <ThemeProvider theme={peggyPastels}>
            <Window className='window'>
                <WindowHeader active={false} className='window-header'>
                    <span>Instagram</span>
                </WindowHeader>
                <WindowContent>
                    <List
                    style={{
                        width: "200px"
                    }}
                    >
                        <ListItem as='a'
                                  href='https://www.instagram.com/evoosa.art'>🎨 Art
                        </ListItem>
                        <Divider/>
                        <ListItem as='a'
                                  href='https://www.instagram.com/evoosa'>🙋🏽‍ Personal
                        </ListItem>
                        <Divider/>
                        <ListItem as='a'
                                  href='https://www.instagram.com/evoosa.trying.to.sport'>💪🏾 Workout
                        </ListItem>
                        <Divider/>
                        <ListItem as='a'
                                  href='https://www.facebook.com/evoosa'
                                  style={{
                                      background: "linear-gradient(150deg, #f4c1ca, #2fe5ff4a)"
                                  }}
                        >👤 Facebook</ListItem>
                    </List>
                </WindowContent>
            </Window>
        </ThemeProvider>
    </div>
);
export default InstagramDropdown;