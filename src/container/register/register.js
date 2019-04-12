import React from 'react';
import Logo from '../../component/logo/logo'
import {List,InputItem,WingBlank,Radio, WhiteSpace,Button} from 'antd-mobile'
const RadioItem = Radio.RadioItem;


class Register extends React.Component{
  constructor(props){
    super(props)
    this.state={
      type:'genius'//niuren
    }
  }

  render(){
    return (
      <div>
        <Logo/>
        <WingBlank>
          <List>
            <InputItem>用户</InputItem>
            <InputItem>密码</InputItem>
            <InputItem>确认密码</InputItem>
            <WhiteSpace/>
            <RadioItem checked={this.state.type == 'genius'}>
              牛人
            </RadioItem>
            <RadioItem checked={this.state.type == 'boss'}>
              boss
            </RadioItem>
          </List>
          <WhiteSpace/>
          <Button type="primary">注册</Button>
        </WingBlank>
        <h2>注册页</h2>
      </div>
    )
  }
}

export default Register;