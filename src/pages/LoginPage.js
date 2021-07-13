import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Modal, Form, Input, Checkbox, Button } from 'antd'
import { toggle_isModalOpen } from '../store/modal/actions';
import { Formik } from 'formik'
const LoginPage = () => {
  const dispatch = useDispatch();
  const isModalOpen = useSelector((state) => state.modal.isModalOpen);
  const toggleModal = () => {
    dispatch(toggle_isModalOpen())
  };
  const toggleIsAdmin = (e) => {
    console.log(e.target.checked)
  }

  const handleSubmit = (values) => {
    console.log(values.firstName)
  }
  return (
          <Formik
            initialValues={{
              firstName: '123',
              lastName: '',
              email: '',
              login: '',
              password: '',
              isAdmin: true
            }}
            onSubmit={handleSubmit}
          >
            {(values, handleChange) => (
                <Modal
                    title="Login"
                    centered="true"
                    visible={isModalOpen}
                    footer={[
                        <>
                            <Button key="button" onClick={toggleModal}>
                                Cancel
                            </Button>
                            <Button htmlType="submit" type="submit">
                                Submit
                            </Button>
                        </>
                    ]}
                >

                <Form
                    name='register'
                    initialValues={{ remember: true }}
                >
                    <Form.Item
                        label="FirstName"
                        name="firstName"
                        rules={[{required: true, messeage: 'Please input your firstName!'}]}
                    >
                        <Input value={values.firstName} onChange={handleChange} name='firstName'/>
                    </Form.Item>
                    <Form.Item
                        label="LastName"
                        name="lastName"
                        rules={[{required: true, messeage: 'Please input your lastName!'}]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Email"
                        name="email"
                        rules={[{required: true, messeage: 'Please input your e-mail!'}]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Login"
                        name="login"
                        rules={[{required: true, messeage: 'Please input your login!'}]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[{required: true, messeage: 'Please input your password!'}]}
                    >
                        <Input />
                    </Form.Item>
                    <Checkbox name="isAdmin" onChange={toggleIsAdmin}>
                        Admin?
                    </Checkbox>
                </Form>
                </Modal>
            )}
          </Formik>
  );
};

export default LoginPage;