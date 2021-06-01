import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './pages/index'
import SignInPage from './pages/signin';
import Trello from './pages/trello';


function App() {
  return (
    <>
      <div className='app'>
        <Router>
          <Switch>
            <Route path="/" component={Home} exact />      
            <Route path="/signin" component={SignInPage} exact />   
            <Route path="/trello" component={Trello} exact />       
          </Switch>
        </Router>
      </div>
    </>
  );
}

export default App;
