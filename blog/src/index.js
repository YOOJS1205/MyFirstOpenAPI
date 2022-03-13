import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './redux_modules/Reducers';
import './index.css';
import App from './App';

// Redux
const store = createStore(rootReducer);

ReactDOM.render(
    <HashRouter>
      <Provider store={store}>
        <Routes>
          <Route path='/' element={<App />} />
        </Routes>
      </Provider>
    </HashRouter>,
  document.getElementById('root')
);
