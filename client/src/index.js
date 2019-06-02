import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './index.css';

import Landing from "./components/layout/Landing";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";

class App extends Component{
    render(){
        return(
            <Router>
            <div className="App">
            <Landing />
            <Route exact path='/register' component={Register} />
            <Route exact path='/login' component={Login} />
            
             </div>
            </Router>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));