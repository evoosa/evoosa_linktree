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

const Social = () => (
    <div>
        <GlobalStyles/>
        <ThemeProvider theme={peggyPastels}>
            <Window className='window'>
                <WindowHeader active={false} className='window-header'>
                    <span>Social</span>
                </WindowHeader>
                <WindowContent>
                    <List className={'window-list'}>
                        <ListItem as='a'
                                  className={"list-item-style-override"}
                                  href='https://www.instagram.com/evoosa'>🙋🏽‍ Personal IG
                        </ListItem>
                        <Divider/>
                        <ListItem as='a'
                                  className={"list-item-style-override"}
                                  href='https://www.facebook.com/evoosa'
                                  style={{
                                      background: "linear-gradient(150deg, #f4c1ca, #2fe5ff4a)"
                                  }}
                        >👤 Personal FB</ListItem>
                    </List>
                </WindowContent>
            </Window>
        </ThemeProvider>
    </div>
);
export default Social;