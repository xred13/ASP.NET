import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers/rootReducer';
import { CheckLoggedIn } from './components/Authentication/AuthenticationStatusManager';

const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');
const rootElement = document.getElementById('root');

console.log("LOCAL STORAGE: " + localStorage.getItem("isLoggedIn"));
const store = createStore(rootReducer, CheckLoggedIn());

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter basename={baseUrl}>
    <App />
    </BrowserRouter>
  </Provider>,
  rootElement);

registerServiceWorker();
