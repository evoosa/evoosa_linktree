import React from 'react';
import {ThemeProvider} from 'styled-components';
import {Link} from 'react-router-dom';

import {Divider, List, ListItem, Window, WindowContent, WindowHeader} from 'react95';

import GlobalStyles from './GlobalStyles';
import peggyPastels from "react95/dist/themes/peggysPastels";

import "../../src/global.css";

const Maps = () => (
    <body style={{textAlign: "center", padding: "5%"}}>
        <div className="application">
            <GlobalStyles/>
            <ThemeProvider theme={peggyPastels}>
                <Window className='app-window'>
                    <WindowHeader active={true} className='window-header'>
                        <span>Maps</span>
                    </WindowHeader>
                    <WindowContent>
                        <p style={{
                            margin: '0 0 12px 0',
                            padding: '8px',
                            fontSize: '1.15em',
                            lineHeight: '1.6',
                            textAlign: 'left'
                        }}>
                            i rlly like lists hehe 🗺️
                        </p>
                        <List className={'window-list'}>
                            <ListItem as='a'
                                      className={'list-item-style-override'}
                                      href='https://maps.app.goo.gl/xvnZr8ovdmE3VhBD8'
                                      target='_blank' rel='noreferrer'>
                                🏚️ Urbex
                            </ListItem>
                            <Divider/>
                            <ListItem as='a'
                                      className={'list-item-style-override'}
                                      href='https://maps.app.goo.gl/pGq8amsNPCSfS1Zy9'
                                      target='_blank' rel='noreferrer'>
                                ☀️ Cafes for laptoping - summer
                            </ListItem>
                            <Divider/>
                            <ListItem as='a'
                                      className={'list-item-style-override'}
                                      href='https://maps.app.goo.gl/9AMxnGJhb2zGFpaN8'
                                      target='_blank' rel='noreferrer'>
                                🍂 Cafes for laptoping - all seasons
                            </ListItem>
                            <Divider/>
                            <ListItem as='a'
                                      className={'list-item-style-override'}
                                      href='https://maps.app.goo.gl/2mq7FBakkszucKYo7'
                                      target='_blank' rel='noreferrer'>
                                ☕ Coffee machines
                            </ListItem>
                            <Divider/>
                            <ListItem as='a'
                                      className={'list-item-style-override'}
                                      href='https://maps.app.goo.gl/LcS9C3yV6HY8aet38'
                                      target='_blank' rel='noreferrer'>
                                🍽️ Tasty restaurants
                            </ListItem>
                            <Divider/>
                            <ListItem as='a'
                                      className={'list-item-style-override'}
                                      href='https://maps.app.goo.gl/bNTaN1QidUsGmkDk7'
                                      target='_blank' rel='noreferrer'>
                                🚽 Places to pee in
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

export default Maps;
