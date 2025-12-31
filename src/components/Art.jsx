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
                                  href='https://photos.app.goo.gl/LGG21wBZwH3BEoYz9'>💼
                            Portfolio
                        </ListItem>
                        <Divider/>
                        <ListItem as='a'
                                  className={"list-item-style-override"}
                                  href='https://www.instagram.com/evoosa.art'>🎨 Instagram
                        </ListItem>
                        <Divider/>
                        <ListItem as='a'
                                  className={'list-item-style-override emphasized-art-item'}
                                  href='https://photos.app.goo.gl/oJ517zY8tnPzRxKh7'>
                            <div className={'emphasized-art-item-text list-item-style-override'}>
                                🎴 Tarot Cards
                            </div>
                        </ListItem>
                        <Divider/>
                        <ListItem as='a'
                                  className={'list-item-style-override emphasized-art-item'}
                                  href='https://photos.app.goo.gl/XQfJoKwE1anJCo1t7'>
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