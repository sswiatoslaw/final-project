import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import ErrorBoundary from './components/ErrorBoundary';
import store from './store/store';
import './assets/index.scss';
import App from './components/App';
import SelectEl from './components/Select/SelectComponent';
import 'antd/dist/antd.css';
ReactDOM.render(
  <React.StrictMode>
    <ErrorBoundary>
      <Provider store={store}>
        <App />
        <SelectEl placeholder={'Size'} typeBoolean={true} width={280} />
      </Provider>
    </ErrorBoundary>
  </React.StrictMode>,
  document.getElementById('root'),
);
