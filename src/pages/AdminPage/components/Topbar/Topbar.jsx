import React from 'react'
import MenuIcon from '@material-ui/icons/Menu';
import './Topbar.scss'
import { Divider, Drawer, List, ListItem, ListItemText } from '@material-ui/core'
import Avatar from '../Avatar'
import axios from 'axios'
import { Link } from 'react-router-dom';
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
  const menuList = [
    {
      name: 'Products',
      url: '/products'
    },
    {
      name: 'Categories',
      url: '/categories'

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
