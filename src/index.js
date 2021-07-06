import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import ErrorBoundary from './components/ErrorBoundary';
import store from './store/store';
import { BrowserRouter } from 'react-router-dom';
import './assets/index.scss';
import Footer from './components/Footer';

ReactDOM.render(
  <React.StrictMode>
    <ErrorBoundary>
      <Provider store={store}>
        <BrowserRouter>
          <Footer />
          
        </BrowserRouter>
      </Provider>
    </ErrorBoundary>
  </React.StrictMode>,
  document.getElementById('root'),
);