import React from 'react'
import { Row, Col, Form, Input } from 'antd';
import { RightOutlined } from '@ant-design/icons';
import validateFormJoingMailing from './validateFormJoingMailing'

const JoingMailing = () => {
  return (
    <Row className={'our-mailing-list'}>
    <Col className={'our-mailing-list_col'}>
    <h3 className={'our-mailing-list_text'}>Join Our Mailing List</h3>
        <Form name="send-mail" validateMessages={validateFormJoingMailing}>
      <Form.Item name={'email'} rules={[{ type: 'email' }]}>
        <Input placeholder={'Enter your @mail.com'} suffix={<RightOutlined onClick={() => {}}/>}/>
      </Form.Item>
      </Form>
    </Col>
  </Row>
  )
}

export default JoingMailing
