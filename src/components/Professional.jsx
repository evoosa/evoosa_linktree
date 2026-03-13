import React from 'react';
import {ThemeProvider} from 'styled-components';
import {Link} from 'react-router-dom';
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
                                  target='_blank' rel='noreferrer'
                                  style={{fontWeight: '900', textShadow: '0.2px 0 currentColor, -0.2px 0 currentColor'}}
                        >👩‍💻 Linkedin
                        </ListItem>
                        <Divider/>
                        <ListItem as={Link}
                                  className={'list-item-style-override my-blogs-nav-item'}
                                  to='/my-blogs'>
                            📝 my blogs ↗
                        </ListItem>
                        <Divider/>
                        <ListItem as='a'
                                  className={"list-item-style-override"}
                                  href='https://huggingface.co/datasets/evoosa/gemstones'
                                  target='_blank' rel='noreferrer'
                        >🤗 Hugging Face
                        </ListItem>
                    </List>
                </WindowContent>
            </Window>
        </ThemeProvider>
    </div>
);
export default Professional;