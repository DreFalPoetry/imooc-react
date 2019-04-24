import React from 'react'
import ReactDOM from 'react-dom';
import {createStore,applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux'
import {
  BrowserRouter,
  Route,
  Redirect,
  Switch
} from 'react-router-dom'
import reducer from './reducer' 
import Login from './container/login/login';
import Register from './container/register/register'
import AuthRoute from './component/AuthRoute/index'
import './config';

import BossInfo from './container/bossinfo/index'
import GeniusInfo from './container/geniusinfo/index'
import Dashboard from './container/dashboard/index'



const store = createStore(reducer,compose(
  applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
) );



//boss genius me msg4个页面
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <AuthRoute></AuthRoute>
      <Switch>
        <Route path='/bossinfo' component={BossInfo}></Route>
        <Route path='/geniusinfo' component={GeniusInfo}></Route>
        <Route path='/login' component={Login}></Route>
        <Route path='/register' component={Register}></Route>
        <Route component={Dashboard}></Route>
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)

