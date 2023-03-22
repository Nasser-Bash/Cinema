import React from 'react';
import ReactDOM from 'react-dom/client';
import './i18n';
import App from './App';


import  "bootstrap/dist/css/bootstrap.min.css";
import "./css/App.css";
import { Provider } from "react-redux";
import { store } from "../src/redux/store/store";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);