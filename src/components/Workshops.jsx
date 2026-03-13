import React from 'react';
import {ThemeProvider} from 'styled-components';
import {Link} from 'react-router-dom';

import {Divider, List, ListItem, Window, WindowContent, WindowHeader} from 'react95';

import GlobalStyles from './GlobalStyles';
import peggyPastels from "react95/dist/themes/peggysPastels";

import "../../src/global.css";

const Workshops = () => (
    <body style={{textAlign: "center", padding: "5%"}}>
        <div className="application">
            <GlobalStyles/>
            <ThemeProvider theme={peggyPastels}>
                <Window className='app-window'>
                    <WindowHeader active={true} className='window-header'>
                        <span>workshops</span>
                    </WindowHeader>
                    <WindowContent>
                        <p style={{
                            margin: '0 0 12px 0',
                            padding: '8px',
                            fontSize: '1.15em',
                            lineHeight: '1.6',
                            textAlign: 'left'
                        }}>
                            i conduct many types of workshops, mainly painting 🎨<br/>
                            <span style={{fontWeight: '900', textShadow: '0.2px 0 currentColor, -0.2px 0 currentColor'}}>want me to run a workshop for your team? <span style={{textTransform: 'none'}}>DM</span> me, i'd love to! 🤝🏾</span>
                        </p>
                        <List className={'window-list'}>
                            <ListItem as='a'
                                      className={'list-item-style-override workshops-cta'}
                                      href='https://photos.app.goo.gl/ZFJ9Eep9YsZ2JZot5'
                                      target='_blank' rel='noreferrer'>
                                👉🏾 checkout my past workshops 👈🏾
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

export default Workshops;
