import React, { Component } from "react";
import { Link } from "react-router-dom";

import { Layout, Menu, Breadcrumb, Row, Col ,Button, Steps, Icon} from 'antd';
const {Step} = Steps;
const { Header, Content, Footer } = Layout;
const DemoBox = props => <p className={`height-${props.value}`}>{props.children}</p>;

class Progress extends Component {
  render() {
    return (
<Steps progressDot current={0}>
    <Step title="Login" description="If you havent already, Create an Account. It's free" />
    <Step title="Build" description="Give us anything you find interesting." />
    <Step title="View" description="Get to see them all stacked up on a timeline." />
  </Steps>
  );
}
}


export default Progress;