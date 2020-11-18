import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Auth0Provider } from "@auth0/auth0-react";

import {Provider} from 'react-redux';
import configureStore from './store/store';

const store = configureStore({});

const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');
const rootElement = document.getElementById('root');

ReactDOM.render(
  <Auth0Provider 
    domain="dev-hkexwuah.us.auth0.com" 
    clientId="Pr6CagwZUaGGk0Fwt8Bjmi2rX01m5rXS" 
    redirectUri={window.location.origin}>
    <Provider store = {store}>
      <BrowserRouter basename={baseUrl}>
        <App />
      </BrowserRouter>
    </Provider>
  </Auth0Provider>
  ,
  rootElement);

registerServiceWorker();

