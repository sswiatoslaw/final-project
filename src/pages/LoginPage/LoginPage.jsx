import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Modal, Form, Input } from 'antd'
import { toggle_isModalOpen } from '../../store/modal/actions';
import axios from 'axios';
const LoginPage = () => {
  const [form] = Form.useForm()
  const dispatch = useDispatch();
  const isModalOpen = useSelector((state) => state.modal.isModalOpen);
  const toggleModal = () => {
    dispatch(toggle_isModalOpen())
  };
  return (
                <Modal
                    title="Login"
                    centered="true"
                    visible={isModalOpen}
                    onCancel={toggleModal}
                    onOk={() => {
                      form.validateFields()
                        .then(userData => {
                          console.log(userData)
                          axios.post('https://boiling-dawn-71074.herokuapp.com/api/customers/login', userData)
                            .then(loginResult => {
                              console.log(loginResult)
                              localStorage.setItem('token', loginResult.token)
                            })
                            .catch(error => {
                              console.log(error)
                            })
                          // form.resetFields();
                          // toggleModal()
                        })
                    }}
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
                        <Input />
                    </Form.Item>
                </Form>
                </Modal>
  );
};

export default LoginPage;