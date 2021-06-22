import './App.css';
import React from 'react';
import {ThemeProvider} from '@material-ui/core'
import Home from "./containers/Home";
import {theme} from './theme';

function App() {
    return (
        <ThemeProvider theme={theme}>
            <div className="App">
                <Home permissions={['READ_TODOS', 'ADMIN']}/>
            </div>
        </ThemeProvider>
    );
}

export default App;
