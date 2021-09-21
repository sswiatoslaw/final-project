import React, { useEffect, useState } from 'react'
import { Table, Space, Button, Modal, Form, Input } from 'antd'
import axios from 'axios'
import 'antd/dist/antd.css'
import { getProducts, recCard } from '../../../store/admin/actions';
import { useDispatch, useSelector } from 'react-redux';
import { getColor } from '../../../api/getColor'

const ProductsPage = () => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.admin.products)
  const activeEditProduct = useSelector(state => state.admin.card)
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [tableColor, setTableColor] = useState()
  const updateCard = (res) => {
    dispatch(recCard(res))
    setIsModalVisible(!isModalVisible)
  }

  const onOk = (values) => {
    const token = localStorage.getItem('token');
    axios.defaults.headers.common['Authorization'] = token;
    axios.put(`https://boiling-dawn-71074.herokuapp.com/api/products/${activeEditProduct._id}`, values)
      .then(res => {
        console.log(res)
      })
  }
  const columns = [
    { title: 'numID', dataIndex: 'itemNo', key: 'itemNo' },
    { title: 'Categories', dataIndex: 'categories', key: 'categories' },
    { title: 'Name', dataIndex: 'name', key: 'name' },
    { title: 'Price', dataIndex: 'currentPrice', key: 'currentPrice' },
    { title: 'Quantity', dataIndex: 'quantity', key: 'quantity'},
    { title: 'Size', dataIndex: 'sizes', key: 'sizes' },
    { title: 'Color', dataIndex: 'color', key: 'color' },
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
    axios.get('https://boiling-dawn-71074.herokuapp.com/api/products')
      .then(loggedInCustomer => {
        dispatch(getProducts(loggedInCustomer.data))
      })
      .catch(err => {
        console.log(err)
      });
  }, [dispatch])
  
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
        onCancel={() => { setIsModalVisible(false) }}
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
            label="Category"
            name="categories"
            rules={[{ required: true, message: 'Please input category!' }]}
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
          label="Price"
          name="currentPrice"
          rules={[{ required: true, message: 'Please input price!' }]}
        >
        <Input />
      </Form.Item>
      <Form.Item
          label="Quantity"
          name="quantity"
          rules={[{ required: true, message: 'Please input quantity!' }]}
        >
        <Input />
      </Form.Item>
      <Form.Item
          label="Size"
          name="sizes"
          rules={[{ required: true, message: 'Please input size!' }]}
        >
        <Input />
      </Form.Item>
      <Form.Item
          label="Color"
          name="color"
          rules={[{ required: true, message: 'Please input color!' }]}
        >
        <Input />
      </Form.Item>

        </Form>
      </Modal>
     )}
    </div>
  )
}

export default ProductsPage
