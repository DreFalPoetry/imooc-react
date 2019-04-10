import React from 'react'
import ReactDOM from 'react-dom';
import {createStore,applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux'

import {
  BrowserRouter,
  Route,
  Link,
  Redirect,
  Switch
} from 'react-router-dom'

import reducer from './reducer' 

import Auth from './Auch'
import Dashboard from './Dashboard'



const reduxDevTools =  window.devToolsExtension? window.devToolsExtension():f=>f;

const store = createStore(reducer,compose(
  applyMiddleware(thunk),
  reduxDevTools
) );

console.log(store.getState())
//设计登陆页面【没有登陆信息 统一跳转到login】
//页面 【导航+显示+注销】

// function render(){
  ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path='/login' exact component={Auth}></Route>
          <Route path='/dashboard' component={Dashboard}></Route>
          <Redirect to="/dashboard"></Redirect>
        </Switch>
      </BrowserRouter>
    </Provider>
  ,document.getElementById('root'))
// }

// render()
// store.subscribe(render)

// import {createStore} from 'redux';

// //通过reducer建立
// //根据老的state和action生成新得state
// function counter(state=0,action){
//   switch(action.type){
//     case 'jia':
//       return state + 1
//     case 'jian':
//       return state - 1
//     default:
//       return 10
//   }
// }

// //1.新建store
// const store = createStore(counter);


// const init = store.getState()
// console.log(init)

// function listener(){
//   const current = store.getState()
//   console.log(`现在有机关枪${current}把`)
// }

// store.subscribe(listener)

// //派发事件，传递action
// store.dispatch({type:'jia'})
// store.dispatch({type:'jia'})
// store.dispatch({type:'jian'})

