import React, { useEffect } from 'react'
import { Route, Switch, useHistory } from 'react-router-dom';
import Topbar from './components/Topbar';
import ProductsPage from './ProductsPage';
import CatalogsPage from './CatalogsPage';
import Routes from '../../components/Routes';
import ColorsPage from './ColorsPage/ColorsPage';

const AdminPage = () => {
  const history = useHistory();
  useEffect(() => {
    console.log(localStorage.getItem('token'))
  }, [])
  if (localStorage.getItem('user').isAdmin) {
    return (
      <>
        <Topbar />
        <Switch>
          <Route exact path="/admin/products">
            <ProductsPage />
          </Route>
          <Route exact path="/admin/categories">
            <CatalogsPage />
          </Route>
          <Route exact path='/admin/colors'>
            <ColorsPage />
          </Route>
        </Switch>
      </>
    )
  } else {
    history.push('/');
    return (<Routes />)
  }
}

export default AdminPage
