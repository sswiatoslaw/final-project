import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../../store/store';
import App from './App';

it('should render App component', () => {
  render(
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  );
});