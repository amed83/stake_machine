import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers/index'
import thunkMiddleware from 'redux-thunk';
import registerServiceWorker from './registerServiceWorker';

import 'semantic-ui-css/semantic.css';
import HomeContainer from './containers/HomeContainer'


const store = createStore(reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  compose(
     applyMiddleware(
       thunkMiddleware)
   ))

ReactDOM.render(
        <Provider store= {store} >
              <HomeContainer />
        </Provider>

, document.getElementById('root'));
registerServiceWorker();
