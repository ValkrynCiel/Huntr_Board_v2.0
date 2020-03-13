import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import './App.css';
import ModalSwitch from './ModalSwitch';
import NavBar from './NavBar';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <BrowserRouter>
        {/* <Route exact path="/login/" render={rtp => <LoginForm {...rtp} />} />
        <Route exact path="/:username/board" render={rtp => <HuntrBoardPage />} />
        <Route exact path="/job/:id" render={() => <h1>home</h1>} /> */}
        <ModalSwitch/>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
