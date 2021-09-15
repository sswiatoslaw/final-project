import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Modal, Form, Input, Button } from 'antd'
import { toggle_isModalOpen } from '../../store/modal/actions';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
const LoginPage = () => {
  const [form] = Form.useForm()
  const dispatch = useDispatch();
  const history = useHistory();
  const isModalOpen = useSelector((state) => state.modal.isModalOpen);
  const toggleModal = () => {
    dispatch(toggle_isModalOpen())
  };
  const onSubmit = () => {
    form.validateFields()
      .then(userData => {
        console.log(userData)
        axios.post('https://boiling-dawn-71074.herokuapp.com/api/customers/login', userData)
          .then(loginResult => {
            localStorage.setItem('token', loginResult.data.token)
          })
          .catch(error => {
            console.log(error)
          })
        form.resetFields();
        toggleModal()
      })
  }
  return (
                <Modal
                    title="Login"
                    centered="true"
                    visible={isModalOpen}
                    onCancel={toggleModal}
                    footer={[
                      <>
                        <Button onClick={() => { history.push('/register') }}>Register</Button>
                        <Button htmlType='submit' type='primary' onClick={onSubmit}>Login</Button>
                      </>
                    ]}
                >
                <Form
                    form={form}
                    name='login'
                >
                    <Form.Item
                        label="login"
                        name="loginOrEmail"
                        rules={[{required: true, messeage: 'Please input your email or login!'}]}
                    >
                        <Input name='firstName'/>
                    </Form.Item>
                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[{required: true, messeage: 'Please input your password  !'}]}
                    >
                        <Input type='password'/>
                    </Form.Item>
                </Form>
                </Modal>
  );
};

export default LoginPage;