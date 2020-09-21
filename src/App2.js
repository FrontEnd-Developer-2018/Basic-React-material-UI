import React from 'react';
import './App.css';
import AppRouter from "./App2/RouterComponent";
import NavBar from "./App2/components/Navbar";
import Container from '@material-ui/core/Container';

function App() {
  return (
      <div>
          <NavBar/>
          <Container>
                <AppRouter/>
          </Container>
      </div>
  );
}

export default App;