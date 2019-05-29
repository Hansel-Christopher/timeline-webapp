import React from 'react';
import ReactDOM from 'react-dom';
import { Router, IndexRoute, Route, browserHistory } from 'react-router';
import './index.css';


const App = () =>{
    return <div> Hello</div>;
}

ReactDOM.render(<App />, document.querySelector('#root'));