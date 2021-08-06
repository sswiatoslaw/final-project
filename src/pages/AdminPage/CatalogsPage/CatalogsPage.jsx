import React, { useEffect, useState } from 'react'
import { Table, Space, Button, Modal, Form, Input } from 'antd'
import axios from 'axios'
import 'antd/dist/antd.css'
import { getProducts, recCard } from '../../../store/admin/actions';
import { useDispatch, useSelector } from 'react-redux';

const CatalogsPage = () => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.admin.products)
  const activeEditProduct = useSelector(state => state.admin.card)
  const [isModalVisible, setIsModalVisible] = useState(false)
  const updateCard = (res) => {
    dispatch(recCard(res))
    setIsModalVisible(!isModalVisible)
  }

  const onOk = (values) => {
    const token = localStorage.getItem('token');
    axios.defaults.headers.common['Authorization'] = token;
    axios.put(`https://boiling-dawn-71074.herokuapp.com/api/catalog/${activeEditProduct._id}`, values)
      .then(res => {
        console.log(res)
      })
  }
  const columns = [
    { title: 'Category ID', dataIndex: 'id', key: 'id' },
    { title: 'Name', dataIndex: 'name', key: 'name' },
    { title: 'Parent ID', dataIndex: 'parentId', key: 'parentId' },
    { title: 'Description', dataIndex: 'description', key: 'description' },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <Space size="middle">
          <Button onClick={() => { updateCard(record) }}>Edit</Button>
        </Space>
      )
    }
  ]
  useEffect(() => {
    const token = localStorage.getItem('token')
    axios.defaults.headers.common['Authorization'] = token;
    axios.get('https://boiling-dawn-71074.herokuapp.com/api/catalog')
      .then(loggedInCustomer => {
        dispatch(getProducts(loggedInCustomer.data))
      })
      .catch(err => {
        console.log(err)
      });
  }, [])
  
  return (
    <div>
      <Table
        columns={columns}
        dataSource={products}
     />
     {isModalVisible && (
      <Modal
        title="Edit product"
        visible={isModalVisible}
        onOk={onOk}
        footer={[
          <Button color='primary' form="form" key="submit" htmlType="submit">
              Submit
          </Button>
        ]}
      >
        <Form
          id='form'
          onFinish={onOk}
          initialValues={activeEditProduct}
        >
          <Form.Item
            label="Category ID"
            name="id"
            rules={[{ required: true, message: 'Please input id!' }]}
          >
          <Input />
        </Form.Item>
        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: 'Please input name!' }]}
        >
        <Input />
      </Form.Item>
      <Form.Item
          label="Parent ID"
          name="parentId"
          rules={[{ required: true, message: 'Please input parent ID!' }]}
        >
        <Input />
      </Form.Item>
      <Form.Item
          label="Description"
          name="description"
          rules={[{ required: true, message: 'Please input description!' }]}
        >
        <Input />
      </Form.Item>
        </Form>
      </Modal>
     )}
    </div>
  )
}

export default CatalogsPage
