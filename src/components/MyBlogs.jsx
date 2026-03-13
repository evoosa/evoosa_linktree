import React from 'react';
import {ThemeProvider} from 'styled-components';
import {Link} from 'react-router-dom';

import {Divider, List, ListItem, Window, WindowContent, WindowHeader} from 'react95';

import GlobalStyles from './GlobalStyles';
import millenium from "react95/dist/themes/millenium";

import "../../src/global.css";

const MyBlogs = () => (
    <body style={{textAlign: "center", padding: "5%"}}>
        <div className="application">
            <GlobalStyles/>
            <ThemeProvider theme={millenium}>
                <Window className='app-window'>
                    <WindowHeader active={true} className='window-header'>
                        <span>my blogs</span>
                    </WindowHeader>
                    <WindowContent>
                        <p style={{
                            margin: '0 0 12px 0',
                            padding: '8px',
                            fontSize: '1.15em',
                            lineHeight: '1.6',
                            textAlign: 'left'
                        }}>
                            where i write about devops, infrastructure & tech 🖥️<br/>
                            i maintain the medium blog occasionally, please have a look!
                        </p>
                        <List className={'window-list'}>
                            <ListItem as='a'
                                      className={'list-item-style-override'}
                                      href='https://medium.com/@evaosher'
                                      target='_blank' rel='noreferrer'>
                                📘 Medium
                            </ListItem>
                            <Divider/>
                            <ListItem as='a'
                                      className={'list-item-style-override'}
                                      href='https://the-devops-diaries.blogspot.com'
                                      target='_blank' rel='noreferrer'>
                                📕 old blog
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

export default MyBlogs;
