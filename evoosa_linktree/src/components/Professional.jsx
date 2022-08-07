import React from 'react';
import {ThemeProvider} from 'styled-components';
import {Window, Error} from 'react-windows-xp';
import {Tooltip, Button} from 'react95';
import GlobalStyles from './GlobalStyles';
import useHistory from "react-router-dom";
// Theme
import honey from "react95/dist/themes/honey";

function Redirect(url) {
    let history = useHistory();

    function handleClick() {
        history.push(url);
    }
};

const Professional = () => (
    <div>
        <GlobalStyles/>
        <ThemeProvider theme={honey}>
            <Window
                title={"Professional Links"}
                showMaximize={true}
                showClose={true}
                showHelp={true}
                showMinimize={true}
                style={
                    {width: "250px"}
                }
                >
                <Error
                    title={"Are You Hiring?"}
                    confirmText={"I'm Hiring"}
                    showClose={true}
                    showHelp={true}
                >Professional Linkedin</Error>
                <br/>
                <Error
                    title={"Professional Blog"}
                    confirmText={"Yes PLS"}
                    onConfirm={Redirect('https://the-devops-diaries.blogspot.com')}
                    // onConfirm={<Redirect push to="https://the-devops-diaries.blogspot.com"/>}
                    iconSize={"30"}
                    showMaximize={true}
                    showMinimize={true}
                >"the DevOps Diaries" </Error>

            </Window>
        </ThemeProvider>
    </div>
);
export default Professional;