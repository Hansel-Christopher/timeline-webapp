import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route , Switch} from "react-router-dom";
import './index.css';

import Landing from "./components/layout/Landing";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Event from "./components/dash/Event";
import Story from "./components/dash/Story";
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
                <Route exact path='/add' component={Story} />
                <Route exact path='/add/event' component={Event} />
                </div>
                </Router>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));