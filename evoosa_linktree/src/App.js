import React from 'react';
import InstagramDropdown from './components/InstagramDropdown';
import SoundCloud from './components/SoundCloud';
import Professional from './components/Professional';

function App() {
    return (
        <div className="App"
             style={{
                 fontFamily: "Lucida Console, Monaco, monospace"
             }}
        >
            <InstagramDropdown/>
            <br/>
            <br/>
            <br/>
            <SoundCloud/>
            <br/>
            <br/>
            <br/>
            <br/>
            <Professional/>
        </div>
    );
}

export default App;