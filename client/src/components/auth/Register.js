import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import classnames from "classnames";
import {Icon} from 'antd';

import {
    Form,
    Input,
    Select,
    Button,
    AutoComplete,
    Row,
    Col
  } from 'antd';
const { Option } = Select;
const AutoCompleteOption = AutoComplete.Option;


class Register extends Component{
    state = {
        confirmDirty: false,
        autoCompleteResult: [],
      };
  
      handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
          if (!err) {
            console.log('Received values of form: ', values);
          }
        });
        const newUser = {
          name: this.state.name,
          email: this.state.email,
          password: this.state.password,
          password2: this.state.confirm
          };
        this.props.registerUser(newUser, this.props.history); 
      };
    
      handleConfirmBlur = e => {
        const value = e.target.value;
        this.setState({ confirmDirty: this.state.confirmDirty || !!value });
      };
    
      compareToFirstPassword = (rule, value, callback) => {
        const form = this.props.form;
        if (value && value !== form.getFieldValue('password')) {
          callback('Two passwords that you enter is inconsistent!');
        } else {
          callback();
        }
      };
    
      validateToNextPassword = (rule, value, callback) => {
        const form = this.props.form;
        if (value && this.state.confirmDirty) {
          form.validateFields(['confirm'], { force: true });
        }
        callback();
      };
    
    render(){
        const { getFieldDecorator } = this.props.form;
        const { autoCompleteResult } = this.state;

        const formItemLayout = {
        labelCol: {
            xs: { span: 24 },
            sm: { span: 5 },
        },
        wrapperCol: {
            xs: { span: 24 },
            sm: { span: 16 },
        },
        };
        const tailFormItemLayout = {
        
        wrapperCol: {
            xs: {
            span: 24,
            offset: 0,
            },
            sm: {
            span: 16,
            offset: 5,
            },
        },
        };

        

        const prefixSelector = getFieldDecorator('prefix', {
        initialValue: '86',
        })(
        <Select style={{ width: 70 }}>
            <Option value="86">+86</Option>
            <Option value="87">+87</Option>
        </Select>,
        );

        const websiteOptions = autoCompleteResult.map(website => (
        <AutoCompleteOption key={website}>{website}</AutoCompleteOption>
        ));

        return(
            <Row >
    <Col span={12} offset={6}>
            <h4 style={{textAlign:"center"}}><b>Register</b> below!</h4>
            <Form {...formItemLayout} onSubmit={this.handleSubmit} style={{textAlign:"left"}}> 
            <Form.Item label="Name">
            {getFieldDecorator('name', {
                rules: [
                {
                    required: true,
                    message: 'Please input your Name!',
                },
                ],
            })(<Input />)}
            </Form.Item>
            <Form.Item label="E-mail">
            {getFieldDecorator('email', {
                rules: [
                {
                    type: 'email',
                    message: 'The input is not valid E-mail!',
                },
                {
                    required: true,
                    message: 'Please input your E-mail!',
                },
                ],
            })(<Input />)}
            </Form.Item>
            <Form.Item label="Password" hasFeedback>
            {getFieldDecorator('password', {
                rules: [
                {
                    required: true,
                    message: 'Please input your password!',
                },
                {
                    validator: this.validateToNextPassword,
                },
                ],
            })(<Input.Password />)}
            </Form.Item>
            <Form.Item label="Confirm Password" hasFeedback>
            {getFieldDecorator('confirm', {
                rules: [
                {
                    required: true,
                    message: 'Please confirm your password!',
                },
                {
                    validator: this.compareToFirstPassword,
                },
                ],
            })(<Input.Password onBlur={this.handleConfirmBlur} />)}
            </Form.Item>
            <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">
            Register
          </Button>
          &nbsp;
        <a href="http://localhost:8080/auth/google"><Button><Icon type="google" />Sign in with Google</Button></a>&nbsp;<a href="http://localhost:8080/auth/facebook"><Button><Icon type="facebook" />Sign in with Facebook</Button></a>&nbsp;or <a href="/login"> login now!</a>
        </Form.Item>
            </Form>
            </Col>
            </Row>
        );
    }
}

const WrapRegister = Form.create({ name: 'register' })(Register);

export default WrapRegister;