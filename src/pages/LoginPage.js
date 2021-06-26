import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Modal, Form, Input } from 'antd'
import { toggle_isModalOpen } from '../store/modal/actions';
import { Formik } from 'formik'
const LoginPage = () => {
  const dispatch = useDispatch();
  const isModalOpen = useSelector((state) => state.modal.isModalOpen);
  const toggleModal = () => {
    dispatch(toggle_isModalOpen())
  };
  return (
    <div>
      <Modal title="Login" visible={isModalOpen} onCancel={toggleModal}>
          <Formik>
            {props => (
                <Form
                    initialValues={{ remember: true }}
                >
                    <Form.Item
                        label="Email"
                        name="Email"
                        rules={[{required: true, messeage: 'Please input your e-mail!'}]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Email"
                        name="Email"
                        rules={[{required: true, messeage: 'Please input your e-mail!'}]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Email"
                        name="Email"
                        rules={[{required: true, messeage: 'Please input your e-mail!'}]}
                    >
                        <Input />
                    </Form.Item>

                </Form>
            )}
          </Formik>
      </Modal>
    </div>
  );
};

export default LoginPage;