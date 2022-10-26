import React from "react";
import ReactDOM from "react-dom";
//initialize redux
// Provider keep track of the store that store state
import { Provider } from 'react-redux';

import { createStore, applyMiddleware, compose } from 'redux';

import thunk from 'redux-thunk';

import App from './App'
import reducers from './reducers'

const store = createStore(reducers,compose(applyMiddleware(thunk)));
// Added the Provider and wrapped the app with it.
// Attached the provider to the store. Now it is successfully using redux
ReactDOM.render(
<Provider store={store}>
        <App/>
</Provider>
,document.getElementById('root'));
