import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import { applyMiddleware, createStore } from 'redux';
import { reducers } from './store/store';
import { Provider } from 'react-redux';
import createSagaMiddleware from '@redux-saga/core';
import userSage from './store/user/saga';
import SuccessLogin from './components/SuccessLogin/SuccessLogin';

const sageMiddleware = createSagaMiddleware();

const store = createStore(reducers, applyMiddleware(sageMiddleware));

sageMiddleware.run(userSage);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<App />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />
          <Route path='/successLogin' element={<SuccessLogin />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
