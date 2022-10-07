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
import millenium from "react95/dist/themes/millenium";

const Professional = () => (
    <div>
        <GlobalStyles/>
        <ThemeProvider theme={millenium}>
            <Window className='window'>
                <WindowHeader active={true} className='window-header'>
                    <span>Professional</span>
                </WindowHeader>
                <WindowContent>
                    <List className={'window-list'}>
                        <ListItem as='a'
                                  className={"list-item-style-override"}
                                  href='https://www.linkedin.com/in/evaosher/'
                        >👩‍💻 Linkedin
                        </ListItem>
                        <Divider/>
                        <ListItem as='a'
                                  className={"list-item-style-override"}
                                  href='https://the-devops-diaries.blogspot.com'
                        >📕 Blog
                        </ListItem>
                    </List>
                </WindowContent>
            </Window>
        </ThemeProvider>
    </div>
);
export default Professional;