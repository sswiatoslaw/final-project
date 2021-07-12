import React, { useEffect, useState } from 'react'
import { Table, Tag, Space, Button, Modal, Form, Input } from 'antd'
import axios from 'axios'
import 'antd/dist/antd.css'
import { getProducts, recCard } from '../../../store/admin/actions';
import { useDispatch, useSelector } from 'react-redux';
const { Column, ColumnGroup } = Table;

const ProductsPage = () => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.admin.products)
  const activeEditProduct = useSelector(state => state.admin.card)
  const [test, setTest] = useState()
  const [isModalVisible, setIsModalVisible] = useState(false)
  const updateCard = (res) => {
    const response = res;
    console.log(res.categories)
    setIsModalVisible(!isModalVisible)
  }
  const onFinish = (values: any) => {
    console.log(values)
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
    const token = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwZTVkY2I4Y2VlZDgxMDA0NWQ1ZmZmNiIsImZpcnN0TmFtZSI6IlN2aWF0b3NsYXYiLCJsYXN0TmFtZSI6IlNvZGVsIiwiaXNBZG1pbiI6dHJ1ZSwiaWF0IjoxNjI1OTA3MzMwLCJleHAiOjE2MjU5NDMzMzB9.JAx2FfZo55hB337jppcB6BBaespKWfgmF-aiF10e4OQ';
    axios.defaults.headers.common['Authorization'] = token;
    axios.get('https://boiling-dawn-71074.herokuapp.com/api/products')
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
      >
        <Form
          onFinish={onFinish}
          initialValues={{
          }}
        >
          <Form.Item
            label="Category"
            name="category"
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
          name="price"
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
          name="size"
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
