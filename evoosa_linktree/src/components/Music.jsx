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
                        <ListItem as='a'
                                  className={"list-item-style-override"}
                                  href='https://open.spotify.com/artist/6SFyjjZ1QMiSqQl1zjk09r?si=9Te2QG5aTMWu4h1BH9ynNA'
                        >🎵 Spotify
                        </ListItem>
                        <Divider/>
                        <ListItem as='a'
                                  className={"list-item-style-override"}
                                  href='https://music.apple.com/us/artist/evoosa/1643603399'
                        >🍎‍ Apple Music
                        </ListItem>
                    </List>
                </WindowContent>
            </Window>
        </ThemeProvider>
    </div>
);
export default Music;