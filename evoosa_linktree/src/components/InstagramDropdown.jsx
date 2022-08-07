import React from 'react';
import {ThemeProvider} from 'styled-components';
import {List, ListItem, Divider} from 'react95';
import GlobalStyles from './GlobalStyles';

// Theme
import peggyPastels from "react95/dist/themes/peggysPastels";

const InstagramDropdown = () => (
    <div>
        <GlobalStyles/>
        <ThemeProvider theme={peggyPastels}>
            <List>
                <ListItem as='a' href='https://www.instagram.com/evoosa'>🙋🏽‍ Personal Account</ListItem>
                <Divider/>
                <ListItem as='a' href='https://www.instagram.com/evoosa.art'>🎨 Art Account</ListItem>
                <Divider/>
                <ListItem as='a' href='https://www.instagram.com/evoosa.trying.to.sport'>💪🏾 Workout Account</ListItem>
            </List>
        </ThemeProvider>
    </div>
);
export default InstagramDropdown;