import React from 'react'
import {connect} from 'react-redux';
import { login,getUserData} from './Auth.redux';
import {Redirect } from 'react-router-dom'
import {Button,Toast} from 'antd-mobile';

//
@connect(state=>state.auth,{login,getUserData})
class Auth extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      data:{}
    }
  }
  componentDidMount(){
    this.props.getUserData()
  }

  loadingToast = () => {
    Toast.loading('Loading...', 1);
  }

  render(){
    return (
      <div>
        <h2>我的名字是{this.props.user},年龄：{this.props.age}</h2>
        {this.props.isAuth ? <Redirect to='/dashboard'></Redirect> : null}
      <h2>你没有权限，需要登陆才能看到</h2>
      <Button onClick={this.props.login}> 登陆</Button>
      <Button onClick={this.loadingToast}>Toast Loading</Button>
      </div>
    ) 
  }
}

export default Auth