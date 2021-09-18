import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Modal, Form, Input } from 'antd'
import { toggle_isModalOpen } from '../../store/modal/actions';
import axios from 'axios';
const RegisterPage = () => {
  const [form] = Form.useForm()
  const dispatch = useDispatch();
  const isModalOpen = useSelector((state) => state.modal.isModalOpen);
  const toggleModal = () => {
    dispatch(toggle_isModalOpen())
  };
  return (
                <Modal
                    title="Register"
                    centered="true"
                    visible={isModalOpen}
                    onCancel={toggleModal}
                    onOk={() => {
                      form.validateFields()
                        .then(userData => {
                          console.log(userData)
                          axios.post('https://boiling-dawn-71074.herokuapp.com/api/customers', userData)
                            .catch(error => {
                              console.log(error)
                            })
                          form.resetFields();
                          toggleModal()
                        })
                    }}
                >
                <Form
                    form={form}
                    name='register'
                >
                    <Form.Item
                        label="firstName"
                        name="firstName"
                        rules={[{required: true, messeage: 'Please input your firstName!'}]}
                    >
                        <Input name='firstName'/>
                    </Form.Item>
                    <Form.Item
                        label="lastName"
                        name="lastName"
                        rules={[{required: true, messeage: 'Please input your lastName!'}]}
                    >
                        <Input name='lastName'/>
                    </Form.Item>
                    <Form.Item
                        label="login"
                        name="login"
                        rules={[{required: true, messeage: 'Please input your login!'}]}
                    >
                        <Input name='login'/>
                    </Form.Item>
                    <Form.Item
                        label="email"
                        name="email"
                        rules={[{required: true, messeage: 'Please input your email!'}]}
                    >
                        <Input name='email' type='email'/>
                    </Form.Item>
                    <Form.Item
                        label="password"
                        name="password"
                        rules={[{required: true, messeage: 'Please input your password!'}]}
                    >
                        <Input name='password' type='password'/>
                    </Form.Item>
                </Form>
                </Modal>
  );
};

export default RegisterPage;