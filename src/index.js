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

import App from './App';
import {counter} from './index.redux';


const reduxDevTools =  window.devToolsExtension? window.devToolsExtension():f=>f;

const store = createStore(counter,compose(
  applyMiddleware(thunk),
  reduxDevTools
) );

class Test extends React.Component{
  render(){
    return <h2>Test</h2>
  }
}

function Erying(){
  return <h2>二营</h2>
}

function Qibinglian(){
  return <h2>骑兵连</h2>
}

//设计登陆页面【没有登陆信息 统一跳转到login】
//页面 【导航+显示+注销】

// function render(){
  ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          {/**只渲染命中的第一个Route */}
          <Route path='/' exact component={App}></Route>
          <Route path='/erying' component={Erying}></Route>
          <Route path='/qibinglian' component={Qibinglian}></Route>
          <Route path='/:location' component={Test}></Route>
        </Switch>
        <div>
          <ul>
            <li>
              <Link to="/">一营</Link>
            </li>
            <li>
              <Link to="/erying" >二营</Link>
            </li>
            <li>
              <Link to="/qibinglian" >骑兵连</Link>
            </li>
          </ul>
          
          {/* <Redirect to='/qibinglian'></Redirect> */}
         
        </div>
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

