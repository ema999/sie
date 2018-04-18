import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import sieApp from './reducers'
import PlayerService  from './services/PlayerService'

PlayerService.getInitialState((response) => {
  let initialState = response;
  __INIT(initialState);
})

function __INIT(initialState) {
  let store = createStore(sieApp, initialState, applyMiddleware(thunkMiddleware))

  ReactDOM.render((
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  ), document.getElementById('root'));

}
