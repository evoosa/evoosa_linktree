import React from 'react';
import {ThemeProvider} from 'styled-components';

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
                        <ListItem as='a'
                                  className={"list-item-style-override"}
                                  href='https://www.instagram.com/evoosa.art'>🎨 Instagram
                        </ListItem>
                        <Divider/>
                        <ListItem as='a'
                                  className={"list-item-style-override"}
                                  href='https://drive.google.com/drive/folders/1uYQCSDochKBivBJUP6nAxRGGcdTIWxt8?usp=sharing'>💾
                            Google Drive
                        </ListItem>
                        <Divider/>
                        <ListItem as='a'
                                  className={'list-item-style-override emphasized-art-item'}
                                  href='https://drive.google.com/drive/folders/1B33pB2WQSOMYm6kaMRjjkyu_-_7gtEvy?usp=sharing'>
                            <div className={'emphasized-art-item-text list-item-style-override'}>
                                🎴 Tarot Cards
                            </div>
                        </ListItem>
                        <Divider/>
                        <ListItem as='a'
                                  className={'list-item-style-override emphasized-art-item'}
                                  href='https://drive.google.com/drive/folders/1auazGwaqwvtS_GP66FI_GBwrBxeGKZCP?usp=sharing'>
                            <div className={'emphasized-art-item-text list-item-style-override'}>
                                🎴 TAKI Cards
                            </div>
                        </ListItem>
                    </List>
                </WindowContent>
            </Window>
        </ThemeProvider>
    </div>
);

export default Art;