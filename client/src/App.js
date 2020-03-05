import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import './App.css';
import HuntrBoardPage from './HuntrBoardPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/login" render={() => <Login/>} />
        <Route exact path="/board" render={() => <HuntrBoardPage />} />
        <Route exact path="/job/:id" render={() => <h1>home</h1>} />
      </BrowserRouter>
      
    </div>
  );
}

export default App;
