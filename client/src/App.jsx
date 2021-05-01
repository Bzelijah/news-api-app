import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import InterestingNews from './Components/InterestingNews/InterestingNews';
import Main from './Components/Main/Main';

function App() {
    return (
        <Router>
            <Header />
            <Switch>
                <div className="App app-div-main-container">
                    <Route exact path="/">
                        <Main />
                    </Route>
                    <Route exact path="/interesting">
                        <InterestingNews />
                    </Route>
                </div>
            </Switch>
        </Router>
    );
}

export default App;
