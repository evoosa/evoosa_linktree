import React from 'react';
import {ThemeProvider} from 'styled-components';
import {Link} from 'react-router-dom';

import {Divider, List, ListItem, Window, WindowContent, WindowHeader} from 'react95';

import GlobalStyles from './GlobalStyles';
import maple from "react95/dist/themes/maple";

import "../../src/global.css";

const MyMusic = () => (
    <body style={{textAlign: "center", padding: "5%"}}>
        <div className="application">
            <GlobalStyles/>
            <ThemeProvider theme={maple}>
                <Window className='app-window'>
                    <WindowHeader active={true} className='window-header'>
                        <span>my music</span>
                    </WindowHeader>
                    <WindowContent>
                        <p style={{
                            margin: '0 0 12px 0',
                            padding: '8px',
                            fontSize: '1.15em',
                            lineHeight: '1.6',
                            textAlign: 'left'
                        }}>
                            i produce trip hop, downtempo, breakbeat & lofi tracks 🎶 have a listen!
                            <br/>
                            <span style={{fontWeight: '900', textShadow: '0.2px 0 currentColor, -0.2px 0 currentColor'}}>🤝🏾 need a track for a uni project or a video game? <span style={{textTransform: 'none'}}>DM</span> me, let's collab 🤝🏾</span>
                        </p>
                        <List className={'window-list'}>
                            <ListItem as='a'
                                      className={'list-item-style-override'}
                                      href='https://open.spotify.com/artist/6SFyjjZ1QMiSqQl1zjk09r?si=9Te2QG5aTMWu4h1BH9ynNA'
                                      target='_blank' rel='noreferrer'>
                                🎵 Spotify
                            </ListItem>
                            <Divider/>
                            <ListItem as='a'
                                      className={'list-item-style-override'}
                                      href='https://soundcloud.com/evoosa/tracks'
                                      target='_blank' rel='noreferrer'>
                                ☁️ SoundCloud
                            </ListItem>
                            <Divider/>
                            <ListItem as='a'
                                      className={'list-item-style-override'}
                                      href='https://music.apple.com/us/artist/evoosa/1643603399'
                                      target='_blank' rel='noreferrer'>
                                🍎 Apple Music
                            </ListItem>
                            <Divider/>
                            <ListItem as='a'
                                      className={'list-item-style-override'}
                                      href='https://evoosa.bandcamp.com/'
                                      target='_blank' rel='noreferrer'>
                                🎸 Bandcamp
                            </ListItem>
                            <Divider/>
                            <ListItem as={Link}
                                      className={'list-item-style-override'}
                                      to='/'>
                                ← back
                            </ListItem>
                        </List>
                    </WindowContent>
                </Window>
            </ThemeProvider>
        </div>
    </body>
);

export default MyMusic;
