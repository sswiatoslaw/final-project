import React, {useRef} from 'react';
import axios from 'axios';
import { useDispatch, useSelector} from 'react-redux';
import { Col, Form, Input, Row } from 'antd';
import { RightOutlined } from '@ant-design/icons';
import './ourMailingList.scss';
import validateFormJoingMailing from './validateFormJoingMailing';
import { add_Email } from '../../store/modal/actions';

const JoingMailing = () => {
  const dispatch = useDispatch()
  const inputValue = useRef()
  const handleChangeInputValue = (e) => {
    dispatch(add_Email(e.target.value))
  }
  const currentEmail = useSelector(state => state.modal.subscribeEmail)

  const newSubscriber = {
    // eslint-disable-next-line quote-props
    'email': currentEmail,
    letterSubject: 'Test letter (final project)',
    letterHtml:
      "<!DOCTYPE html><html lang='en'> <head> <meta charset='UTF-8' /> <meta name='viewport' content='width=device-width, initial-scale=1.0' /> <meta http-equiv='X-UA-Compatible' content='ie=edge' /> <title>Document</title> <style> td { padding: 20px 50px; background-color: yellow; color: blueviolet; font-size: 20px; } </style> </head> <body> <table> <tr> <td>Test1</td> <td>Test2</td> <td>Test3</td> </tr> <tr> <td>Test1.1</td> <td>Test2.1</td> <td>Test3.1</td> </tr> </table> </body></html>"
  };

  const NewSubscriber = (e) => {
    inputValue.current.resetFields()
    axios
      .post('https://boiling-dawn-71074.herokuapp.com/api/subscribers', newSubscriber)
      .then(response => {
        if (response.status === 200) {
          alert('вы успешно подписаны на savvy-tots')
        }
      })
      .catch(e => alert('Вы уже подписаны'))
  }
  return (
    <Row className={'our-mailing-list'}>
      <Col className={'our-mailing-list_col'}>
        <h3 className={'our-mailing-list_text'}>Join Our Mailing List</h3>
        <Form ref={inputValue} name='send-mail' validateMessages={validateFormJoingMailing}>
          <Form.Item name={'email'} rules={[{ type: 'email' }]}>
            <Input placeholder={'Enter your @mail.com'} suffix={<RightOutlined onClick={NewSubscriber} />} onChange={handleChangeInputValue} />
            
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
};

export default JoingMailing;
