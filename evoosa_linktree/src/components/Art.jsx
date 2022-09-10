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

const listItemStyle = {
    // fontSize: "calc(1em)"
    // fontSize: 0.006 *(this.width)
    // fontSize: "calc(0.99vw)"
}

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
                                  style={{
                                      background: "#6cbdff",
                                      color: "#ffffff",
                                      fontWeight: "bold",
                                      fontSize: "min(calc(10px + 0.390625vw), 15px)",
                                      height: "60px",
                                      lineHeight: "25px",
                                  }}
                                  href='http://i-need-art-supplies-help.pasten.life/'>
                            🖌️ I Need Art Supplies,
                            <br/>
                            Help!
                        </ListItem>
                        <Divider/>
                        <ListItem as='a'
                                  href='https://www.instagram.com/evoosa.art'>🎨 Instagram
                        </ListItem>
                        <Divider/>
                        <ListItem as='a'
                                  style={listItemStyle}
                                  href='https://drive.google.com/drive/folders/1uYQCSDochKBivBJUP6nAxRGGcdTIWxt8?usp=sharing'>💾
                            Google Drive
                        </ListItem>
                        <Divider/>
                        <ListItem as='a'
                                  style={listItemStyle}
                                  href='https://drive.google.com/drive/folders/1auazGwaqwvtS_GP66FI_GBwrBxeGKZCP?usp=sharing'>🎴
                            TAKI Cards
                        </ListItem>
                        <Divider/>
                        <ListItem as='a'
                                  style={listItemStyle}
                                  href='https://visit.evoosa.art'>📖 Portfolio
                        </ListItem>
                    </List>
                </WindowContent>
            </Window>
        </ThemeProvider>
    </div>
);

export default Art;