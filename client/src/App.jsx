import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <div className="App">
          <Route exact path="/">
            <Main />
          </Route>
        </div>
      </Switch>
    </Router>
  );
}

export default App;
