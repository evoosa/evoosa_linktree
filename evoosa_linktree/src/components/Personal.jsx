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
import peggyPastels from "react95/dist/themes/peggysPastels";

const Personal = () => (
    <div>
        <GlobalStyles/>
        <ThemeProvider theme={peggyPastels}>
            <Window className='window'>
                <WindowHeader active={false} className='window-header'>
                    <span>Personal</span>
                </WindowHeader>
                <WindowContent>
                    <List className={'window-list'}>
                        <ListItem as='a'
                                  className={"list-item-style-override"}
                                  href='https://www.instagram.com/evoosa'>🙋🏽‍ Instagram
                        </ListItem>
                        <Divider/>
                        <ListItem as='a'
                                  className={"list-item-style-override"}
                                  href='https://www.facebook.com/evoosa'
                                  style={{
                                      background: "linear-gradient(150deg, #f4c1ca, #2fe5ff4a)"
                                  }}
                        >👤 Facebook
                        </ListItem>
                    </List>
                </WindowContent>
            </Window>
        </ThemeProvider>
    </div>
);
export default Personal;