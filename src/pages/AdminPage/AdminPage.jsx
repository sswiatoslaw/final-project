import React from 'react'
import { Route, Switch } from 'react-router-dom';
import Topbar from './components/Topbar';
import ProductsPage from './ProductsPage';
const AdminPage = () => {
  return (
    <>
      <Topbar />
      <Switch>
        <Route path="/products">
          <ProductsPage />
        </Route>
      </Switch>
    </>
  )
}

export default AdminPage
