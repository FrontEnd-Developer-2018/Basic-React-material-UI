import React from 'react';
import './App.css';
import AppRouter from "./App2/RouterComponent";
import NavBar from "./App2/components/Navbar";
import Container from '@material-ui/core/Container';
import { Router  } from 'react-router-dom';

import history from './App2/history';


function App() {
    return (
        <div>
            <Router  history={history}> 
                <div>
                    <NavBar />

                    <Container>
                        <AppRouter />
                    </Container>
                </div>
            </Router >

        </div>
    );
}

export default App;