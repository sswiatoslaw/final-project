import React, {useRef} from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { Col, Form, Input, Row } from 'antd';
import { RightOutlined } from '@ant-design/icons';
import './ourMailingList.scss';
// import validateFormJoingMailing from './validateFormJoingMailing';
import { addEmail } from '../../store/modal/actions';
import { postNewSubscriber } from '../../api/postNewSubscriber';
import { getSubscribers } from '../../api/getSubscribers';
const JoingMailing = () => {
  const dispatch = useDispatch()
  const inputValue = useRef()
  const handleChangeInputValue = (e) => {
    dispatch(addEmail(e.target.value))
  }
  const regExp = (/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i)
  const currentEmail = useSelector(state => state.modal.subscribeEmail)
  const checkSubscribersValidValue = async () => {
    await getSubscribers().then(response => {
      response.data.map(userEmail => {
        if (userEmail.email === currentEmail && response.status === 200) {
          alert('Вы уже являетесь нашим подпищиком)))')
        }
      })
    })
    if (regExp.exec(currentEmail)) {
      postNewSubscriber(currentEmail, inputValue.current)
    }
  }

  return (
    <Row className={'our-mailing-list'}>
      <Col className={'our-mailing-list_col'}>
        <h3 className={'our-mailing-list_text'}>Join Our Mailing List</h3>
        <Form ref={inputValue} name='send-mail'>
          <Form.Item name={'email'} rules={ [
            {
              required: true,
              type: 'email',
              message: 'The input is not valid E-mail!',
            },
            
          ] }>
            <Input placeholder={'Enter your @mail.com'} suffix={<RightOutlined onClick={checkSubscribersValidValue} />} onChange={handleChangeInputValue} />
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
};

export default JoingMailing;
