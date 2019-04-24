import React from 'react';
import Logo from '../../component/logo/logo'
import {List,InputItem,WingBlank,WhiteSpace,Button} from 'antd-mobile'
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import {login} from '../../redux/user.redux'


@connect(state=>state.user,{login})
class Login extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      user:'',
      pwd:''
    }
    this.register = this.register.bind(this)
  }

  register(){
    this.props.history.push('./register')
  }

  handleChange = (name,val) => {
    this.setState({
      [name]:val
    })
  }

  handleLogin = () => {
    this.props.login(this.state)
  }

  render(){
    return (
      <div>
          {this.props.redirectTo && this.props.redirectTo!='/login' ? <Redirect to={this.props.redirectTo} /> : null}
        <Logo/>
        <h2>登陆页</h2>
        <WingBlank>
          <List>
             {this.props.msg? <p className='error-msg'>{this.props.msg}</p>:null }
            <InputItem onChange={this.handleChange.bind(this,'user')}>用户</InputItem>
            <InputItem type="password" onChange={this.handleChange.bind(this,'pwd')}>密码</InputItem>
          </List>
          <WhiteSpace />
          <Button type="primary" onClick={this.handleLogin}>登陆</Button>
          <WhiteSpace />
          <Button type="primary" onClick={this.register}>注册</Button>
        </WingBlank>
      </div>
    ) 
  }
}

export default Login;