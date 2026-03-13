import React from 'react';
import {ThemeProvider} from 'styled-components';
import {Link} from 'react-router-dom';

import {Divider, List, ListItem, Window, WindowContent, WindowHeader} from 'react95';

import GlobalStyles from './GlobalStyles';
import aiee from "react95/dist/themes/aiee";

import "../../src/global.css";

const Projects = () => (
    <body style={{textAlign: "center", padding: "5%"}}>
        <div className="application">
            <GlobalStyles/>
            <ThemeProvider theme={aiee}>
                <Window className='app-window'>
                    <WindowHeader active={true} className='window-header'>
                        <span>cool projects</span>
                    </WindowHeader>
                    <WindowContent>
                        <p style={{
                            margin: '0 0 12px 0',
                            padding: '8px',
                            fontSize: '1.15em',
                            lineHeight: '1.6',
                            textAlign: 'left'
                        }}>
                            some cool art projects i worked on throughout the years 🎨<br/>
                            please have a look, means a lot!
                        </p>
                        <List className={'window-list'}>
                            <ListItem as='a'
                                      className={'list-item-style-override'}
                                      href='https://photos.app.goo.gl/oJ517zY8tnPzRxKh7'
                                      target='_blank' rel='noreferrer'>
                                🎴 Tarot Cards
                            </ListItem>
                            <Divider/>
                            <ListItem as='a'
                                      className={'list-item-style-override'}
                                      href='https://photos.app.goo.gl/XQfJoKwE1anJCo1t7'
                                      target='_blank' rel='noreferrer'>
                                🎴 TAKI Cards
                            </ListItem>
                            <Divider/>
                            <ListItem as='a'
                                      className={'list-item-style-override'}
                                      href='https://photos.app.goo.gl/ze7Nn1mJApPZdDnSA'
                                      target='_blank' rel='noreferrer'>
                                😇 Archangels
                            </ListItem>
                            <Divider/>
                            <ListItem as={Link}
                                      className={'list-item-style-override'}
                                      to='/'>
                                ← Back
                            </ListItem>
                        </List>
                    </WindowContent>
                </Window>
            </ThemeProvider>
        </div>
    </body>
);

export default Projects;
