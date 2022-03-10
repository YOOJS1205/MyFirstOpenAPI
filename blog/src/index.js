import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './index.css';
import App from './App';
import Login from './Login';

// Redux
var id = '';

var currentInfo = {
  isLogin: false,
  id: id
}

function reducer(currentState = currentInfo, action) {
  if (action.type === 'CLICK_LOGIN') {
    var newInfo = {...currentInfo, isLogin: true}
    return newInfo;
  }
  else {
    return currentState;
  }
}

const store = createStore(reducer);

ReactDOM.render(
    <HashRouter>
      <Provider store={store}>
        <Routes>
          <Route path='/' element={<App />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </Provider>
    </HashRouter>,
  document.getElementById('root')
);
