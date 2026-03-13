import React from 'react';
import {ThemeProvider} from 'styled-components';
import {Link} from 'react-router-dom';

import {Divider, List, ListItem, Window, WindowContent, WindowHeader} from 'react95';

import GlobalStyles from './GlobalStyles';
import aiee from "react95/dist/themes/aiee";

import "../../src/global.css";

const Portfolio = () => (
    <body style={{textAlign: "center", padding: "5%"}}>
        <div className="application">
            <GlobalStyles/>
            <ThemeProvider theme={aiee}>
                <Window className='app-window'>
                    <WindowHeader active={true} className='window-header'>
                        <span>portfolio</span>
                    </WindowHeader>
                    <WindowContent>
                        <p style={{
                            margin: '0 0 12px 0',
                            padding: '8px',
                            fontSize: '1.15em',
                            lineHeight: '1.6',
                            textAlign: 'left'
                        }}>
                            i've been painting for many many years 🎨<br/>
                            <span style={{fontWeight: '900', textShadow: '0.2px 0 currentColor, -0.2px 0 currentColor'}}>i regularly upload my art to instagram, please check it out!</span>
                        </p>
                        <List className={'window-list'}>
                            <ListItem as='a'
                                      className={'list-item-style-override portfolio-instagram-cta'}
                                      href='https://www.instagram.com/evoosa.art'
                                      target='_blank' rel='noreferrer'>
                                👉🏾 instagram art page 👈🏾
                            </ListItem>
                            <Divider/>
                            <ListItem as='a'
                                      className={'list-item-style-override'}
                                      href='https://photos.app.goo.gl/LGG21wBZwH3BEoYz9'
                                      target='_blank' rel='noreferrer'>
                                💼 art archive
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

export default Portfolio;
