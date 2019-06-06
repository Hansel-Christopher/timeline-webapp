import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route , Switch} from "react-router-dom";
import './index.css';

import Landing from "./components/layout/Landing";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";

import Profile from "./components/dash/Profile";

class App extends Component{
 
   render(){
        return(
                <Router>
                <div className="App">
                <Landing />
                <Switch>
                <Route exact path='/register' component={Register} />
                </Switch>
                <Route exact path='/login' component={Login} />
                <Route exact path='/profile' component={Profile} />
                </div>
                </Router>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));