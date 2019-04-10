import React from 'react'
import App from './App';
import {logout } from './Auth.redux' 
import {
  BrowserRouter,
  Route,
  Link,
  Redirect,
  Switch
} from 'react-router-dom'
import {connect} from 'react-redux'

function Yiying(){
  return <h2>yiying</h2>
}

function Erying(){
  return <h2>Erying</h2>
}

@connect(state=>state.auth,{logout})
class Dashboard extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    console.log(this.props)
    const redirect = <Redirect to='/login'></Redirect>

    const app = (
      <div>
        <h1>独立团</h1>
        {this.props.isAuth? <button onClick={this.props.logout}>注销</button>:null}
        <ul>
          <li>
            <Link to="/dashboard/">一营</Link>
          </li>
          <li>
            <Link to="/dashboard/erying" >二营</Link>
          </li>
          <li>
            <Link to="/dashboard/qibinglian" >骑兵连</Link>
          </li>
        </ul>
        <Route path='/dashboard/' exact component={App}></Route>
        <Route path='/dashboard/erying' component={Yiying}></Route>
        <Route path='/dashboard/qibinglian' component={Erying}></Route>
        {/* <Redirect to='/qibinglian'></Redirect> */}
      </div>
    )
    return  this.props.isAuth ? app : redirect
  }
}

export default Dashboard

