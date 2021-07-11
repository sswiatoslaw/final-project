import React from 'react'
import {Form, Input, Button} from 'antd';
import './LeaveAmessave.scss'
const LeaveAmessave = () => {
  return (
        <div className={'leave-a-messave-block'}>
            <h3 className={'leave-a-messave-block__text'}>Leave a Messave</h3>
            <Form>
            <Form.Item label="Name">
          <Input />
        </Form.Item>
        <Form.Item name={['email']} label="Email" rules={[{ type: 'email' }]}>
        <Input />
      </Form.Item>
      <Form.Item label="Message">
        <Input.TextArea className={'message-text-area'} />
      </Form.Item>
      <p className={'ant-form-text'}>
          If you have a question or a query no matter how big or small, feel free to get in touch
with us here and we'll happily help you.
</p>
      <Form.Item>
      <Button htmlType="submit">Send</Button>
      </Form.Item>
      </Form>
        </div>
  )
}

export default LeaveAmessave
