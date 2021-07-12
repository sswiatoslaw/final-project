import React from 'react'
import MenuIcon from '@material-ui/icons/Menu';
import UsersIcon from '@material-ui/icons/Group';
import './Topbar.scss'
import { Divider, Drawer, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core'
import Avatar from '../Avatar'
import axios from 'axios'
import { Link, Route } from 'react-router-dom';
const Topbar = () => {
  const getAvatar = () => {
    const token = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwZTVkY2I4Y2VlZDgxMDA0NWQ1ZmZmNiIsImZpcnN0TmFtZSI6IlN2aWF0b3NsYXYiLCJsYXN0TmFtZSI6IlNvZGVsIiwiaXNBZG1pbiI6dHJ1ZSwiaWF0IjoxNjI1OTA3MzMwLCJleHAiOjE2MjU5NDMzMzB9.JAx2FfZo55hB337jppcB6BBaespKWfgmF-aiF10e4OQ';
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
  const menuList = [
    {
      name: 'Products',
      url: '/products'
    },
    {
      name: 'Categories',
      url: '/categories'

    },
    {
      name: 'Users',
      url: '/users'

    },
  ]
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
    </>
  )
}

export default Topbar
