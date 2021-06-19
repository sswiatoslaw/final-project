import React from 'react';
import ReactDOM from 'react-dom';
import ErrorBoundary from './components/ErrorBoundary';
import {Provider} from 'react-redux';
import store from './store/store';
import './assets/index.scss';
import App from './components/App';

ReactDOM.render(
    <React.StrictMode>
        <ErrorBoundary>
            <Provider store={store}>
                <App/>
            </Provider>
        </ErrorBoundary>
    </React.StrictMode>,
    document.getElementById('root')
);
