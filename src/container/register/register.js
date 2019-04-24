import React from 'react';
import Logo from '../../component/logo/logo'
import {List,InputItem,WingBlank,Radio, WhiteSpace,Button} from 'antd-mobile'
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom'
import { register } from '../../redux/user.redux'
import '../../index.css'
import imoocForm from '../../component/imoocForm/index'

const RadioItem = Radio.RadioItem;

@connect(
  state => state.user,
  {register}
)
@imoocForm
class Register extends React.Component{
  constructor(props){
    super(props)
  }

  componentDidMount(){
    this.props.handleChange('type','genius')
  }

  // handleChange = (name,val) => {
  //   this.setState({
  //     [name]:val
  //   })
  // }

  handleRegister = () => {
    this.props.register(this.props.state)
  }

  render(){
    return (
      <div>
        {this.props.redirectTo ? <Redirect to={this.props.redirectTo} /> : null}
        <Logo/>
        <WingBlank>
          <List>
            {this.props.msg? <p className='error-msg'>{this.props.msg}</p>:null }
            <InputItem onChange={this.props.handleChange.bind(this,'user')}>用户</InputItem>
            <InputItem type="password" onChange={this.props.handleChange.bind(this,'pwd')}>密码</InputItem>
            <InputItem type="password" onChange={this.props.handleChange.bind(this,'repeatpwd')}>确认密码</InputItem>
            <WhiteSpace/>
            <RadioItem 
              checked={this.props.state.type == 'genius'}
              onChange={this.props.handleChange.bind(this,'type','genius')}
            >
              牛人
            </RadioItem>
            <RadioItem 
              checked={this.props.state.type == 'boss'}
              onChange={this.props.handleChange.bind(this,'type','boss')}
            >
              boss
            </RadioItem>
          </List>
          <WhiteSpace/>
          <Button type="primary" onClick={this.handleRegister}>注册</Button>
        </WingBlank>
        <h2>注册页</h2>
      </div>
    )
  }
}

export default Register;