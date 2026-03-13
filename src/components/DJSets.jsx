import React from 'react';
import {ThemeProvider} from 'styled-components';
import {Link} from 'react-router-dom';

import {Divider, List, ListItem, Window, WindowContent, WindowHeader} from 'react95';

import GlobalStyles from './GlobalStyles';
import maple from "react95/dist/themes/maple";

import "../../src/global.css";

const DJSets = () => (
    <body style={{textAlign: "center", padding: "5%"}}>
        <div className="application">
            <GlobalStyles/>
            <ThemeProvider theme={maple}>
                <Window className='app-window'>
                    <WindowHeader active={true} className='window-header'>
                        <span><span style={{textTransform: 'none'}}>DJ</span> sets</span>
                    </WindowHeader>
                    <WindowContent>
                        <p style={{
                            margin: '0 0 12px 0',
                            padding: '8px',
                            fontSize: '1.15em',
                            lineHeight: '1.6',
                            textAlign: 'left'
                        }}>
                            i <span style={{textTransform: 'none'}}>DJ</span> pop, deep house, techno, <span style={{textTransform: 'none'}}>DnB</span>, tekno, and generally whatever you'd like 🎧<br/>
                            i especially love <span style={{textTransform: 'none'}}>DJing</span> at house parties 🏠🕺<br/>
                            <span style={{fontWeight: '900', textShadow: '0.2px 0 currentColor, -0.2px 0 currentColor'}}>
                                doing a house party? i'd love to play! hit me up 🕺
                            </span>
                        </p>
                        <List className={'window-list'}>
                            <ListItem as='a'
                                      className={'list-item-style-override preserve-case dj-sets-cta'}
                                      href='https://photos.app.goo.gl/tWaHW2RMXAyZN6WNA'
                                      target='_blank' rel='noreferrer'>
                                👉🏾 checkout my past DJ sets 👈🏾
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

export default DJSets;
