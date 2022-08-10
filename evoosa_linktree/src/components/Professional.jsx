import React from 'react';
import {ThemeProvider} from 'styled-components';
import {Window, Error} from 'react-windows-xp';
import GlobalStyles from './GlobalStyles';

// Theme
import honey from "react95/dist/themes/honey"

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
                style={{
                    width: "250px"
                }}
            >
                <Error
                    title={"Are You Hiring?"}
                    confirmText={"Yes"}
                    showClose={true}
                    showHelp={true}
                    onConfirm={() => {
                        window.location.href = 'https://www.linkedin.com/in/evaosher/';
                    }} iconSize={"30"}
                    onClose={() => {
                    }}
                    style={{
                        background: "linear-gradient(150deg, #ffffff, #006fd3",
                        fontSize: "18px",
                        color: "#003b8c"
                    }}
                >Professional Linkedin</Error>
                <br/>
                <Error
                    title={"Professional Blog"}
                    className={"title-bar"}
                    confirmText={"OK"}
                    onConfirm={() => {
                        window.location.href = 'https://the-devops-diaries.blogspot.com';
                    }} iconSize={"30"}
                    onClose={() => {
                    }}
                    showMaximize={true}
                    showMinimize={true}
                    style={{
                        background: "linear-gradient(150deg,#000000,#079600)",
                        fontSize: "18px",
                        color: "greenyellow"
                    }}
                >"the DevOps Diaries" </Error>
            </Window>
        </ThemeProvider>
    </div>
);

export default Professional;