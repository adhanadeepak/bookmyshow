import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'

import './App.css';

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Home from './pages/Home';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
        <Router>
            <Header />

            <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>
            </Switch>
        </Router>


    </div>
  );
}

export default App;
