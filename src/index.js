import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import CreateProposal from './components/CreateProposal'
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers/index'
import thunkMiddleware from 'redux-thunk';
import registerServiceWorker from './registerServiceWorker';
import { composeWithDevTools } from 'redux-devtools-extension';
import 'semantic-ui-css/semantic.css';
import HomeContainer from './containers/HomeContainer'


const store = createStore(reducer,
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
