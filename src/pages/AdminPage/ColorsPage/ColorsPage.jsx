import React, { useEffect, useState } from 'react'
import { Table, Space, Button, Modal, Form, Input, Tag } from 'antd'
import axios from 'axios'
import 'antd/dist/antd.css'
import { getColors, recCard } from '../../../store/admin/actions';
import { useDispatch, useSelector } from 'react-redux';

const ColorsPage = () => {
  const dispatch = useDispatch();
  const colors = useSelector(state => state.admin.colors)
  const activeEditProduct = useSelector(state => state.admin.card)
  const [isModalVisible, setIsModalVisible] = useState(false)
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
    { title: 'ID', dataIndex: '_id', key: '_id' },
    { title: 'Name', dataIndex: 'name', key: 'name' },
    {
      title: 'HEX',
      dataIndex: 'cssValue',
      key: 'cssValue',
      render: cssValue => (
        <>
        {cssValue.map(value => {
          return (
            <Tag color={value} key={value}>
              {value.toUpperCase()}
            </Tag>
          )
        })}
        </>
      )
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <Space size="middle">
          <Button onClick={() => { updateCard(record) }}>Delete</Button>
        </Space>
      )
    }
  ]
  useEffect(() => {
    const token = localStorage.getItem('token')
    axios.defaults.headers.common['Authorization'] = token;
    axios.get('https://boiling-dawn-71074.herokuapp.com/api/colors')
      .then(colors => {
        dispatch(getColors(colors.data))
      })
      .catch(err => {
        console.log(err)
      });
  }, [dispatch])
  
  return (
    <div>
      <Table
        columns={columns}
        dataSource={colors}
     />
     {isModalVisible && (
      <Modal
        title="Edit product"
        visible={isModalVisible}
        onClose={isModalVisible}
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

export default ColorsPage
