import React, { Component } from 'react'

import axios from 'axios';
import { Form, Input, Button, Select, Col, Checkbox, Row, DatePicker, TimePicker} from 'antd';
const { Option } = Select;


class Event extends Component {
    constructor() {
        super();
        this.state = {
          formLayout: 'horizontal',
        };
      }
    
      handleFormLayoutChange = e => {
        this.setState({ formLayout: e.target.value });
      };
   
    handleSubmit = e => {
        e.preventDefault();
        const event = {
            title: this.state.title,
            port: this.state.port
        }
        this.props.form.validateFields((err, values) => {
          if (!err) {
            console.log('Received values of form: ', values);        
            axios.post('http://localhost:8080/add', event)
            .then(res => console.log(res.data));
          }
        });
      };
    
      normFile = e => {
        console.log('Upload event:', e);
        if (Array.isArray(e)) {
          return e; 
        }
        return e && e.fileList;
      };
 
    
      render() {
        const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
          labelCol: { span: 6 },
          wrapperCol: { span: 14 },
        };
        const tailFormItemLayout = {
            wrapperCol: {
              xs: {
                span: 24,
                offset: 0,
              },
              sm: {
                span: 16,
                offset: 6,
              },
            },
          };
        const config = {
            rules: [{ type: 'object', required: true, message: 'Please select time!' }],
          };
        return (
            <div>
                <h4 style={{textAlign:"center"}}>Create Event</h4>
          <Form {...formItemLayout} onSubmit={this.handleSubmit}>
             <Form.Item label="Event: " hasFeedback>
                {getFieldDecorator('select', {
                    rules: [{ message: 'Please select your event type!' }],
                })(
                    <Select placeholder="Please select type of event">
                    <Option value="single">Single</Option>
                    <Option value="multi">Multi-day</Option>
                    </Select>,
                )}
            </Form.Item>
            <Form.Item label="Title: ">{getFieldDecorator('title', {
                rules: [
                    {
                        required: true,
                        message: 'Title is required!',
                    },
                    ],
                })(<Input placeholder="Appears on card of each event"/>)}
            </Form.Item>

            <Form.Item label="Headline: ">
            {getFieldDecorator('headline', {
                rules: [
                    {
                        required: true,
                        message: 'Title is required!',
                    },
                    ],
                })(<Input placeholder="Appears on view of each event"></Input>)}
            </Form.Item>
            <Form.Item label="Start Date: ">
               {getFieldDecorator('date-time-picker', config)(
                    <DatePicker showTime format="YYYY-MM-DD HH:mm:ss" />,
                )}
            </Form.Item>
            <Form.Item label="Image: ">
            <Input placeholder="Link to image"/>
            </Form.Item>
            <Form.Item {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit">
            Submit
          </Button>
          </Form.Item>
          </Form>
            </div>
        )
    }
}

const EventAdd = Form.create({ name: 'validate_other' })(Event);
export default EventAdd;