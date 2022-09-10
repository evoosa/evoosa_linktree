import React from 'react';
import {ThemeProvider} from 'styled-components';

import {
    Divider,
    WindowContent,
    WindowHeader,
    Window, List, ListItem
} from 'react95';

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
                                  className={'emphasized-art-item-item'}
                                  style={{
                                      height: "60px",
                                      lineHeight: "25px",
                                      fontSize: "min(calc(10px + 0.390625vw), 15px)"
                                  }}
                                  href='http://i-need-art-supplies-help.pasten.life/'>
                            <div className={'emphasized-art-item-text'}>
                                🖌️ I Need Art Supplies,
                                <br/>
                                Help!
                            </div>
                        </ListItem>
                        <Divider/>
                        <ListItem as='a'
                                  className={'emphasized-art-item-item'}
                                  href='https://drive.google.com/drive/folders/1auazGwaqwvtS_GP66FI_GBwrBxeGKZCP?usp=sharing'>
                            <div className={'emphasized-art-item-text'}>
                                🎴 TAKI Cards
                            </div>
                        </ListItem>
                        <Divider/>
                        <ListItem as='a'
                                  href='https://www.instagram.com/evoosa.art'>🎨 Instagram
                        </ListItem>
                        <Divider/>
                        <ListItem as='a'
                                  href='https://drive.google.com/drive/folders/1uYQCSDochKBivBJUP6nAxRGGcdTIWxt8?usp=sharing'>💾
                            Google Drive
                        </ListItem>
                        <Divider/>
                        <ListItem as='a'
                                  href='https://visit.evoosa.art'>📖 Portfolio
                        </ListItem>
                    </List>
                </WindowContent>
            </Window>
        </ThemeProvider>
    </div>
);

export default Art;