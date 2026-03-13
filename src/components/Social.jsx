import React from 'react';
import {ThemeProvider} from 'styled-components';
import {Link} from 'react-router-dom';

import {Divider, List, ListItem, Window, WindowContent, WindowHeader} from 'react95';

import GlobalStyles from './GlobalStyles';
import peggyPastels from "react95/dist/themes/peggysPastels";

import "../../src/global.css";

const Social = () => (
    <body style={{textAlign: "center", padding: "5%"}}>
        <div className="application">
            <GlobalStyles/>
            <ThemeProvider theme={peggyPastels}>
                <Window className='app-window'>
                    <WindowHeader active={true} className='window-header'>
                        <span>social media</span>
                    </WindowHeader>
                    <WindowContent>
                        <p style={{
                            margin: '0 0 12px 0',
                            padding: '8px',
                            fontSize: '1.15em',
                            lineHeight: '1.6',
                            textAlign: 'left'
                        }}>
                            i really like social media, i very regularly maintain my pages 📱
                        </p>
                        <List className={'window-list'}>
                            <ListItem as='a'
                                      className={'list-item-style-override'}
                                      href='https://www.instagram.com/evoosa'
                                      target='_blank' rel='noreferrer'
                                      style={{fontWeight: '900', textShadow: '0.2px 0 currentColor, -0.2px 0 currentColor'}}>
                                🙋🏽‍ Instagram
                            </ListItem>
                            <Divider/>
                            <ListItem as='a'
                                      className={'list-item-style-override'}
                                      href='https://www.instagram.com/tel.aviv.history'
                                      target='_blank' rel='noreferrer'>
                                🌆 Tel Aviv History
                            </ListItem>
                            <Divider/>
                            <ListItem as='a'
                                      className={'list-item-style-override'}
                                      href='https://www.facebook.com/evoosa'
                                      target='_blank' rel='noreferrer'>
                                👤 Facebook
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

export default Social;
