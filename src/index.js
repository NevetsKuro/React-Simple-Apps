import React from 'react';
import ReactDOM from 'react-dom';
import MainBody from './MainBody';
import './css/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap/dist/react-bootstrap';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers';

const store = createStore(reducer);


ReactDOM.render(
  <Provider store={store}>
    <MainBody/>,
  </Provider>,
  document.getElementById('root')
);