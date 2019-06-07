import React, { Component } from 'react'

import {
    Form,
    Select,
    Input,
    InputNumber,
    Switch,
    Radio,
    Slider,
    Button,
    Upload,
    Icon,
    Rate,
    Checkbox,
    Row,
    Col,
  } from 'antd';
  
  const { Option } = Select;

class Story extends Component {
    constructor() {
        super();
        this.state = {
          formLayout: 'horizontal',
        };
      }
      
      handleFormLayoutChange = e => {
        this.setState({ formLayout: e.target.value });
      };
    
      render() {
        const { getFieldDecorator } = this.props.form;
        const { formLayout } = this.state;
        const formItemLayout =
          formLayout === 'horizontal'
            ? {
                labelCol: { span: 4 },
                wrapperCol: { span: 14 },
              }
            : null;
        const buttonItemLayout =
          formLayout === 'horizontal'
            ? {
                wrapperCol: { span: 14, offset: 4 },
              }
            : null;
        return (
          <div>
            <Form layout={formLayout}>
              <Form.Item label="Title :" {...formItemLayout}>
                <Input placeholder="Give the story a short and catchy title" />
              </Form.Item>
              <Form.Item label="Checkbox.Group">
          {getFieldDecorator('checkbox-group', {
            initialValue: ['A', 'B'],
          })(
            <Checkbox.Group style={{ width: '100%' }}>
              <Row>
                <Col span={8}>
                  <Checkbox value="A">A</Checkbox>
                </Col>
                <Col span={8}>
                  <Checkbox disabled value="B">
                    B
                  </Checkbox>
                </Col>
                <Col span={8}>
                  <Checkbox value="C">C</Checkbox>
                </Col>
                <Col span={8}>
                  <Checkbox value="D">D</Checkbox>
                </Col>
                <Col span={8}>
                  <Checkbox value="E">E</Checkbox>
                </Col>
              </Row>
            </Checkbox.Group>,
          )}
        </Form.Item>
              <Form.Item {...buttonItemLayout}>
                <Button type="primary">Submit</Button>
              </Form.Item>
            </Form>
            </div>
        )
      }
}

const StoryAdd = Form.create({ name: 'validate_other' })(Story);
export default StoryAdd;
