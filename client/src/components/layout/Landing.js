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
  <Row>
    <Col span={6} offset={18}>
      <Row>
      <Col span={6} offset={3}>
      <Link to="/register">
      <Button>Register</Button>
      </Link>
      </Col>
      <Col span={6} offset={3}>
      <Link to="/login">
      <Button>Login</Button>
      </Link>
      </Col>
      </Row>
    </Col>
  </Row>
  <Row>
    <Col span={12} offset={6}>  
    <Link to='/'><h1 style={{textAlign:"center"}}>Chronos <Icon type="deployment-unit" /></h1></Link>
    <Progress />
    </Col>
  </Row>
        </div>

    );
  }
}


export default Landing;