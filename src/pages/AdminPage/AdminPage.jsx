import React from 'react'
import { Route, Switch } from 'react-router-dom';
import Topbar from './components/Topbar';
import ProductsPage from './ProductsPage';
import CatalogsPage from './CatalogsPage';

const AdminPage = () => {
  return (
    <>
      <Topbar />
      <Switch>
        <Route path="/products">
          <ProductsPage />
        </Route>
        <Route path="/categories">
          <CatalogsPage />
        </Route>
      </Switch>
    </>
  )
}

export default AdminPage
