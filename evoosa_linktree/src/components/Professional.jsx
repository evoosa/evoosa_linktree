import React from 'react';
import {ThemeProvider} from 'styled-components';
import {Error} from 'react-windows-xp';
import GlobalStyles from './GlobalStyles';
import {
    Divider,
    Window as Window95,
    WindowContent,
    WindowHeader
} from 'react95';
// Theme
import millenium from "react95/dist/themes/millenium";

const Professional = () => (
    <div>
        <GlobalStyles/>
        <ThemeProvider theme={millenium}>
            <Window95 className='window'
                      style={{
                          width: "95%"
                      }}>
                <WindowHeader active={true} className='window-header'>
                    <span>Professional</span>
                </WindowHeader>
                <WindowContent>
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
                            fontSize: "min(calc(15px + 0.390625vw), 25px)",
                            color: "#003b8c",
                            width: "95%",
                            letterSpacing: "0.7px"
                        }}
                    >Linkedin</Error>
                    <br/>
                    <Divider/>
                    <br/>
                    <Error
                        title={"Professional Blog"}
                        confirmText={"OK"}
                        onConfirm={() => {
                            window.location.href = 'https://the-devops-diaries.blogspot.com';
                        }} iconSize={"30"}
                        onClose={() => {
                        }}
                        showMinimize={true}
                        style={{
                            background: "linear-gradient(150deg,#000000,#079600)",
                            fontSize: "min(calc(16px + 0.390625vw), 16px)",
                            letterSpacing: "0.7px",
                            width: "95%",
                            color: "greenyellow"
                        }}
                    >"the DevOps Diaries" </Error>
                </WindowContent>
            </Window95>
        </ThemeProvider>
    </div>
);

export default Professional;