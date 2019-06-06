import React, { Component } from 'react'

import { Link } from 'react-router-dom';

import {
    Form,
    Input,
    Select,
    Button,
    AutoComplete,
    Row,
    Col
  } from 'antd';

export default class Profile extends Component {
    render() {
        return (
            <div style={{textAlign:"center"}}>
                <h4 >Welcome to your Dashboard!</h4>
                <Link to="/add"><Button>Create a Story</Button></Link>
                <Link to="/add/event"><Button>Create a Event</Button></Link>
                <a href="http://localhost:8080/view"><Button>View a Story</Button></a>
            </div>
        )
    }
}
