import React, { Component } from "react";
import { Link } from "react-router-dom";

import Progress from "./Progress";
import { Layout, Menu, Breadcrumb, Row, Col ,Button, Icon} from 'antd';

const { Header, Content, Footer } = Layout;
const DemoBox = props => <p className={`height-${props.value}`}>{props.children}</p>;

class Landing extends Component {
  render() {
    return (
      <div>
      <div style={{backgroundColor: "#6666ff"}}>
   <Row type="flex" justify="space-around" align="middle">
    <Col span={12} offset={6}>  
    <Link to='/'><h1 style={{textAlign:"center"}}>Chronos <Icon type="deployment-unit" /></h1></Link>
    </Col>
    <Col span={6} offset={0}>
      <Col span={6} offset={6}>
        <Link to="/register">
          <Button>Register</Button>
        </Link>
      </Col>
      <Col span={6} offset={3}>
        <Link to="/login">
          <Button>Login</Button>
        </Link>
      </Col>
    </Col>
  </Row>


    </div>
    <br></br>
      <Row>
    <Col span={12} offset={6}>  
    <Progress />
    </Col>
    </Row>
    <br></br>
    </div>
    );
  }
}


export default Landing;