<<<<<<< HEAD
import React from 'react'
import { Row, Col, Form, Input, Typography } from 'antd';
import { RightOutlined } from '@ant-design/icons';
import validateFormJoingMailing from './validateFormJoingMailing'
const { Title } = Typography;
=======
import React from 'react';
import { Col, Form, Input, Row } from 'antd';
import { RightOutlined } from '@ant-design/icons';
import './ourMailingList.scss';
import validateFormJoingMailing from './validateFormJoingMailing';
>>>>>>> 70bc87203d448be57f85d6f8d6ca8c8c2195638f

const JoingMailing = () => {
  return (
    <Row className={'our-mailing-list'}>
<<<<<<< HEAD
    <Col>
    <Title level={3} className={'our-mailing-list_text'}>Join Our Mailing List</Title>
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
=======
      <Col className={'our-mailing-list_col'}>
        <h3 className={'our-mailing-list_text'}>Join Our Mailing List</h3>
        <Form name='send-mail' validateMessages={validateFormJoingMailing}>
          <Form.Item name={'email'} rules={[{ type: 'email' }]}>
            <Input placeholder={'Enter your @mail.com'} suffix={<RightOutlined onClick={() => {}} />} />
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
};

export default JoingMailing;
>>>>>>> 70bc87203d448be57f85d6f8d6ca8c8c2195638f
