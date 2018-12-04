import React, { Component } from 'react';
import Home from './pages/home'
import Login from './pages/login'
import Secret from './pages/secret'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import NavBar from './navbar'
class App extends Component {
    render() { 
      return (
        <Router>
          <div className="App">
              <NavBar></NavBar>
              <Route exact path="/login" component={Login} />
              <Route exact path="/secret" component={Secret} />
              <Route path="/home/:abc" render={({match}) => <Home match={match} />} />
          </div>
          </Router>
       
        );
    }
}

export default App;