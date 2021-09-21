import React from 'react'
import MenuIcon from '@material-ui/icons/Menu';
import './Topbar.scss'
import { Divider, Drawer, List, ListItem, ListItemText } from '@material-ui/core'
import Avatar from '../Avatar'
import axios from 'axios'
import { Link } from 'react-router-dom';
import { Button, Modal, Form, Input } from 'antd'
const Topbar = () => {
  const getAvatar = () => {
    const token = localStorage.getItem('token')
    axios.defaults.headers.common['Authorization'] = token;
    axios.get('https://boiling-dawn-71074.herokuapp.com/api/customers/customer')
      .then(loggedInCustomer => {
        console.log(loggedInCustomer.data)
      })
      .catch(err => {
        console.log(err)
      });
  }
  const [leftPanel, setLeftPanel] = React.useState(false);
  const [isModalVisible, setIsModalVisible] = React.useState(false)
  const menuList = [
    {
      name: 'Products',
      url: '/admin/products'
    },
    {
      name: 'Categories',
      url: '/admin/categories'

    },
    {
      name: 'Colors',
      url: '/admin/colors'
    }
  ]

  const onOk = (values) => {
    const token = localStorage.getItem('token');
    axios.defaults.headers.common['Authorization'] = token;
    axios.post('https://boiling-dawn-71074.herokuapp.com/api/products/', values)
      .then(res => {
        console.log(res)
      })
  }

  const handleLeftPanel = () => {
    setLeftPanel(!leftPanel)
  }
  return (
    <>
      <div className="topbar">
        <div className="topbar-wrapper">
          <div className="topbar-left">
            <div className="topbar-left__logo">
              <span>
                Savvy tots
              </span>
            </div>
            <MenuIcon className="topbar-right__menu" onClick={handleLeftPanel} />
          </div>
          <div className="topbar-right">
            <Button color='primary' onClick={() => { setIsModalVisible(true) }}>Add Product</Button>
            <Avatar onClick={getAvatar} />
          </div>
        </div>
      </div>
      <Drawer open={leftPanel} onClose={handleLeftPanel}>
        <div className="drawer-list-item">
          <List>
            {
              menuList.map((text, index) => (
                <>
                  <ListItem button component={Link} to={text.url} key={text.name}>
                      <ListItemText primary={text.name} />
                  </ListItem>
                  <Divider />
                </>
              )
              )
            }
          </List>
        </div>
      </Drawer>
      {isModalVisible && (
              <Modal
              title="Add product"
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
    </>
  )
}

export default Topbar
