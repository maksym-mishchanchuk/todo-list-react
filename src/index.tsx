import React from 'react';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { render } from "react-dom";
import { HashRouter } from "react-router-dom";

const rootElement = document.getElementById("root");
render(
  <HashRouter>
    <App />
  </HashRouter>
    , rootElement);

reportWebVitals();
